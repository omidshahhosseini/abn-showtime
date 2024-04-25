export function sanitize(html: string) {
  const disallowedTags = ["script", "iframe", "style", "object", "embed"];

  // Create a temporary div element
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;

  // Remove any disallowed elements
  const allElements = tempDiv.getElementsByTagName("*");
  for (const element of allElements) {
    if (disallowedTags.includes(element.tagName.toLowerCase())) {
      element.remove(); // Remove disallowed tags
    }
  }

  // Return the sanitized HTML
  return tempDiv.innerHTML;
}
