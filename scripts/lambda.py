import json
import logging

import boto3


ses = boto3.client("ses", region_name="us-east-1")
logger = logging.getLogger(__name__)

CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
}


def response(status_code, body):
    return {
        "statusCode": status_code,
        "headers": CORS_HEADERS,
        "body": json.dumps(body),
    }


def lambda_handler(event, context):
    method = event.get("requestContext", {}).get("http", {}).get("method", "")
    if method == "OPTIONS":
        return response(200, {"message": "CORS preflight response"})

    try:
        body = json.loads(event.get("body") or "{}")
    except (json.JSONDecodeError, TypeError):
        return response(400, {"message": "Invalid request body"})

    if not isinstance(body, dict):
        return response(400, {"message": "Invalid request body"})

    metadata = body.get("metadata", {})
    if not isinstance(metadata, dict):
        return response(400, {"message": "Invalid request body"})

    email = str(body.get("email", "")).strip()
    first_name = str(metadata.get("firstName", "")).strip()
    last_name = str(metadata.get("lastName", "")).strip()
    company = str(metadata.get("company", "")).strip()
    comments = str(metadata.get("comments", "")).strip()

    if not all((email, first_name, last_name, comments)):
        return response(400, {"message": "All contact fields are required"})

    try:
        ses.send_email(
            Source="no-reply@pagekey.io",
            Destination={
                "ToAddresses": ["newsletter@pagekey.io", "boldgirlboss@gmail.com"]
            },
            Message={
                "Subject": {"Data": "New Jeannette Mills contact form submission"},
                "Body": {
                    "Text": {
                        "Data": (
                            f"Name: {first_name} {last_name}\n"
                            f"Company or Organization: {company or 'Not provided'}\n"
                            f"Email: {email}\n\n"
                            f"Comments:\n{comments}"
                        )
                    }
                },
            },
        )
    except Exception:
        logger.exception("SES send_email failed")
        return response(500, {"message": "Failed to send message"})

    return response(200, {"message": "Message sent"})
