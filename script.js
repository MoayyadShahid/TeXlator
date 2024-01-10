$(document).ready(function() {
    var MQ = MathQuill.getInterface(2);
    var mathField = MQ.MathField(document.getElementById('equation-editor'), {
        handlers: {
            edit: function() {
                var latex = mathField.latex(); // Get the LaTeX from MathQuill
                var displayLatex = latex ? `\\[${latex}\\]` : ''; // Wrap in LaTeX display math delimiters only if not empty
                document.getElementById('latex-output').textContent = displayLatex; // Display LaTeX code or empty
                MathJax.typesetPromise(); // Update the rendering with MathJax
            }
        }
    });
});
