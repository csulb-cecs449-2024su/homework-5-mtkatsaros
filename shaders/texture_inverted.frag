#version 330
// A fragment shader for rendering a mesh that has a texture, but no lighting.
layout (location=0) out vec4 FragColor;

// Input from vertices: interpolated texture coordinate.
in vec2 TexCoord;

// Uniform from application: the texture sampler.
uniform sampler2D baseTexture;

void main() {
    // Sample the texture image at the fragment's texture coordinate.
    vec4 originalColor = texture(baseTexture, TexCoord);
    FragColor = vec4(1 - originalColor.r, 1 - originalColor.g, 1 - originalColor.b, originalColor.a);
}
