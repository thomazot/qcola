export default () => {
    const eventFakeSelect = new Event('FAKESELECT');
    const eventVariant = new Event('TRAY:VARIANT');

    $tray(document).ajaxComplete((evet, xhr, settings) => {
        if(settings.url.indexOf('variacao_dupla_compre_junto') !== -1)  {
            document.dispatchEvent(eventFakeSelect);
        }
        if(settings.url.indexOf('loadNextVariantDropDown') !== -1) {
            document.dispatchEvent(eventFakeSelect);
        }
        if(settings.url.indexOf('variant_form') !== -1) {
            document.dispatchEvent(eventVariant);
        }
    });

}