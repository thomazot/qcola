export default () => {
    const eventFakeSelect = new Event('FAKESELECT');

    $tray(document).ajaxComplete((evet, xhr, settings) => {
        if(settings.url.indexOf('variacao_dupla_compre_junto') !== -1)  {
            document.dispatchEvent(eventFakeSelect);
        }
        if(settings.url.indexOf('loadNextVariantDropDown') !== -1) {
            document.dispatchEvent(eventFakeSelect);
        }
    });

}