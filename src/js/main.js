document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.select').forEach((label) => {
    const select = label.querySelector('select');
    const output = label.querySelector('p');

    if (!select || !output) return;

    const update = () => {
      const selectedOption = select.options[select.selectedIndex];
      output.textContent = selectedOption.text;
    };

    update();

    select.addEventListener('change', update);
  });
});
