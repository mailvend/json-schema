{
  "type": "object",
  "properties": {
    "header": {
      "type": "object",
      "properties": {
        "title": { "type": "string" },
        "logo": { "type": "string", "format": "uri" }
      }
    },
    "body": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": { "type": "string", "enum": ["text", "image", "link", "button"] },
          "content": { "type": "string" },
          "url": { "type": "string", "format": "uri" },
          "alt": { "type": "string" }
        },
        "required": ["type"]
      }
    },
    "footer": {
      "type": "object",
      "properties": {
        "text": { "type": "string" },
        "socialLinks": {
          "type": "array",
          "items": { "type": "string", "format": "uri" }
        }
      }
    }
  }
}
