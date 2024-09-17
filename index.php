<!DOCTYPE html>
<script type="importmap">
    {
      "imports": {
        "@google/generative-ai": "https://esm.run/@google/generative-ai"
      }
    }
</script>
<html lang="en">

<head>
    <title>Prompt Generator</title>
    <script defer type="module" src="index.js"></script>
</head>
<body>


<form>
    <label for="prompt">Enter your prompt:</label>
    <input type="text" id="prompt" name="prompt">
    <button type="button" id="myButton">Click me!</button>
</form>

<div id="response"></div>

</body>
</html>