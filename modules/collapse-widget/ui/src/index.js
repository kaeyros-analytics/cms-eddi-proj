export default () => {
  apos.util.widgetPlayers.collapser = {
    selector: '[data-collapse]',
    player: function(el) {
      // Add player code
      const color = el.dataset.color || 'purple';
      // Find our button
      const btn = el.querySelector('[data-collapser-button]');
      // Find our hidden text
      const target = el.querySelector('[data-collapser-detail]');

      btn.onclick = () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        // Update the button's aria attribute
        btn.setAttribute('aria-expanded', !expanded);
        // Update the `hidden` attribute on the detail
        target.hidden = expanded;
      };

    }
  };
};
