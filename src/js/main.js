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

  document.querySelectorAll('.input-pass-view').forEach((btn) => {
    btn.addEventListener('click', () => {
      const input = btn.closest('label').querySelector('input');

      const isPassword = input.type === 'password';

      input.type = isPassword ? 'text' : 'password';
      btn.classList.toggle('show', isPassword);
    });
  });

  const tabs = document.querySelectorAll('.account-tabs li');
  const contents = document.querySelectorAll('.account-tab');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const tabName = tab.dataset.tab;

      tabs.forEach((t) => t.classList.remove('active'));
      contents.forEach((c) => c.classList.remove('active'));

      tab.classList.add('active');

      document.querySelector(`.account-tab[data-tab="${tabName}"]`).classList.add('active');
    });
  });
});
