<p align="center">
    <img src="/assets/icon.png" width="80" />
    <h2 align="center">Sakai for VSCode</h2>
</p>

<p align="center">All natural pine, faux fur and a bit of soho vibes for the classy minimalist</p>

## Usage

1. Open VSCode
2. Search for `Sakai Theme` in extensions
3. Install the theme and choose your variant in `Preferences: Color theme`
4. Optionally enable the included icon theme in `Preferences: File Icon Theme`

## Gallery

> Font used is [JetBrains](https://www.jetbrains.com/lp/mono/)

**Sakai**

![VSCode with Sakai](https://github.com/Sakai-Theme/visual-studio-code/blob/main/assets/screenshot.png)

## Disable italics

Add this snippet to your `settings.json` to disable italics for Sakai Theme

```json
"editor.tokenColorCustomizations": {
  "[Sakai Theme*]": {
    "textMateRules": [
      {
        "scope": [
          "comment",
          "entity.other.attribute-name",
          "entity.other.inherited-class",
          "support.function",
          "variable",
          "meta.directive.vue"
        ],
        "settings": {
          "fontStyle": ""
        }
      }
    ]
  }
}
```
