"use strict";
var Strings = (function () {
    function Strings() {
        this.addNewLayer = 'Add new layer';
        this.autoRefreshDisabled = 'An update operation seems to be taking too long. Automatic refreshing has been disabled.';
        this.border = 'Border';
        this.borderRadius = 'Border radius';
        this.cancel = 'Cancel';
        this.chartDemoDescription = 'This demo shows the chart-as-a-symbol map by visualizing distribution between different traffic types in Helsinki using a pie chart';
        this.chartType = 'Chart type';
        this.chartTypeDonut = 'Donut diagram';
        this.chartTypePie = 'Pie diagram';
        this.chorodemoDescription = 'This demo shows the classic choropleth map by mapping the United States by population density';
        this.clusterDemoDescription = 'This clustering demo utilizes the same data from HSL as the heatmap. Clustering is another excellent way to display large datasets efficiently';
        this.clusterHelpText = 'Clustering is a method of grouping large amounts of map elements together to improve map readability and performance on the site';
        this.clusterInfo = 'Cluster info';
        this.clusterInfoHelpText = 'Select a header from the list and choose what kind of information about it is displayed when the cluster is hovered';
        this.clusterMenuTitle = 'Clustering';
        this.clusterShowAvg = 'Show average on hover';
        this.clusterShowCount = 'Show point count on hover';
        this.clusterShowSum = 'Show sum on hover';
        this.clusterTogglePopup = 'The dataset contains a large number of map points. Point clustering has been enabled to boost performance. If you wish, you may turn this off in the clustering options';
        this.clusterUseSymbolStyle = 'Use symbol style';
        this.colorMenuStepHelp = 'Set the lower limit for each step and a color to match';
        this.colorMenuTitle = 'Colors';
        this.colorStepEquidistant = 'Equidistant';
        this.colorStepKMeans = 'K-means';
        this.colorStepQuantiles = 'Quantiles';
        this.continue = 'Continue';
        this.coordSystemHelp = 'Not sure? Try with the default (WGS84) and see if the data lines up.';
        this.coordSystemMissing = 'Get the Proj4-string for your system from ';
        this.createNewFilter = 'Create new filter';
        this.createNewMap = ' Create a new map';
        this.currentlySupportedTypes = 'Currently supported file types';
        this.customProjectionPrompt = 'Insert custom Proj4-string here';
        this.decimalAccuracy = 'Decimals';
        this.deleteFilter = 'Delete filter';
        this.demoLoadButton = 'Check it out';
        this.displayText = 'Text';
        this.downloadMenuTitle = 'Download';
        this.downloadShowFilters = 'Show filters on the image';
        this.downloadShowLegend = 'Show legend on the image';
        this.editingLayerSelection = 'Select the layer to edit';
        this.editLayerProperties = 'Edit layer properties';
        this.fileDetailsViewHeader = 'Just a few more details';
        this.fileTypeSupportInfo = 'More info about supported file types';
        this.fillColor = 'Fill';
        this.filterAllowNoSelection = 'At least one element must be selected';
        this.filterChangeOpacity = 'Change opacity';
        this.filterDragTip = 'TIP: drag the filter on screen by the header to place it where you wish';
        this.filterMenuTitle = 'Filters';
        this.filterMultiSelect = 'Allow multiple selections';
        this.filterRemove = 'Remove filtered items';
        this.filterShowSlider = 'Show slider';
        this.filterUseDistinctValues = 'Use distinct values';
        this.filterUseSteps = 'Use custom steps';
        this.finishImport = 'Make a map!';
        this.giveNameToFilter = 'Give a name to the filter';
        this.giveNameToLayer = 'Give a name to the layer';
        this.heatDemoDescription = 'This demo showcases the heat map by visualizing the daily public transportation boardings by HSL';
        this.heatLayers = 'Heat layers';
        this.heatMapRadius = 'Heatmap cell radius';
        this.icon = 'Icon';
        this.iconColorHelp = 'Change icon colors in the color menu';
        this.iconField = 'Field to change icon by';
        this.iconShape = 'Icon shape';
        this.iconStepHelp = 'Set the lower limit and icon';
        this.layerMenuDragDrop = 'Drag and drop to reorder';
        this.layerMenuTitle = 'Layers';
        this.layerType = 'Layer type';
        this.layerTypeHeat = 'Heat map';
        this.layerTypeStandard = 'Standard';
        this.legendAlignHorizontal = 'Align horizontally';
        this.legendDistShow = 'Show distribution';
        this.legendMenuTitle = 'Legend';
        this.legendMeta = 'Description';
        this.legendPosition = 'Legend position';
        this.legendTitle = 'Title';
        this.legendVarShow = 'Show variable names';
        this.loading = 'Loading...';
        this.maxBlockColumns = 'Max. columns';
        this.maxBlockRows = 'Max. rows';
        this.name = 'Name';
        this.noFileNotification = 'Upload a non-empty file!';
        this.noHeadersError = 'No headers found! Make sure that the file you uploaded contains appropriate headers. Consult the wiki for more information';
        this.notification = 'Notification';
        this.opacity = 'Opacity';
        this.openSavedMapButton = 'Show me';
        this.or = 'or';
        this.popupClusterHelp = 'NOTE: Cluster pop-ups will always open on hover';
        this.popupHelp = 'Pop-ups show information about map features, such as points and areas. Select the data you wish to show, and the method by which the pop-up is opened.';
        this.popupMenuTitle = 'Pop-ups';
        this.previous = 'Go back';
        this.refreshMap = 'Refresh map';
        this.revert = 'Revert';
        this.saveAsFile = 'Download map as a file';
        this.saveAsFileHelpText = 'Save the map as a .mmap-file for later editing';
        this.saveAsImage = 'Download map as image';
        this.saveAsImageHelpText = 'Save the currently visible map as a .png image file';
        this.saveEmbedCode = 'Save embed code';
        this.saveEmbedCodeHelpText = 'Save the .html code to embed this map directly to your web page';
        this.saveFilter = 'Save filter';
        this.selectBaseMap = 'Select the base map';
        this.selectColorScheme = 'Select a color scheme';
        this.selectColorVariable = 'Select color variable';
        this.selectCoordSystem = 'Select the coordinate system';
        this.selectFilter = 'Select the filter to update';
        this.selectFilterLayer = 'Select layer to attach filter to';
        this.selectFilterVariable = 'Select the filter variable';
        this.selectHeadersToShow = 'Select the variables to show';
        this.selectLatHeader = 'Select the latitude/Y field';
        this.selectLayerPlaceholder = 'Select layer...';
        this.selectLngHeader = 'Select the longitude/X field';
        this.selectPlaceholder = 'Select...';
        this.selectStepCalculationMode = 'Step calculation mode';
        this.selectSymbolType = 'Select symbol type';
        this.setCustomScheme = 'Set custom scheme';
        this.setIcon = 'Set icon';
        this.showLegend = 'Show legend';
        this.showPopUpInPlace = 'Open on map element';
        this.showPopupOnClick = 'Open on click';
        this.showPopUpOnHover = 'Open on hover';
        this.showPopUpUpTop = 'Open at top of screen';
        this.singleBlockValue = 'Single block value';
        this.singleBlockWidth = 'Single block width';
        this.size = 'size';
        this.sizeLowLimit = 'Size lower limit';
        this.sizeMultiplier = 'Size multiplier';
        this.sizeUpLimit = 'Size upper limit';
        this.spreadsheets = 'spreadsheets';
        this.standardLayers = 'Standard layers';
        this.steps = 'Steps';
        this.symboldemoDescription = 'This demo shows some of the different symbol options of MakeMaps';
        this.symbolMenuScale1 = 'Scale ';
        this.symbolMenuScale2 = ' by';
        this.symbolMenuScaleHeight = 'Scale height by';
        this.symbolMenuTitle = 'Symbols';
        this.symbolMenuUseFAIcon = 'Use another icon from ';
        this.symbolTypeBlocks = 'Blocks';
        this.symbolTypeChart = 'Chart';
        this.symbolTypeSimple = 'Simple';
        this.uploadDropBoxText = 'Drop file or click to open upload menu';
        this.uploadMapDropBoxText = 'Drop a previously saved map here or click to open upload menu';
        this.uploadSavedMap = 'Upload saved map';
        this.uploadViewHeader = 'Upload the file containing the data';
        this.useClustering = 'Use clustering';
        this.useCustomProjectionButton = 'The coordinate system is not on the list';
        this.useMultipleFillColors = 'Use multiple fill colors';
        this.useMultipleIcons = 'Use multiple icons';
        this.welcomeAccessibility = 'Accessibility';
        this.welcomeAccessibilityText1 = 'MakeMaps offers a selection of color schemes from ';
        this.welcomeAccessibilityText2 = ' that are easily viewable to all kinds of users';
        this.welcomeDataFiltering = 'Data filtering';
        this.welcomeDataFilteringText = 'MakeMaps allows for dynamic data filtering on the fly. You can set your own filter steps, filter by unique values or anything in between';
        this.welcomeFileSupport = 'File support';
        this.welcomeFileSupportLink = 'Full list and details';
        this.welcomeFileSupportText = 'MakeMaps can create maps from XLSX,CSV,KML and GPX file formats, among others.';
        this.welcomeOpenness = 'Openness';
        this.welcomeOpennessText1 = '  MakeMaps is built as open source, on open source libraries, with open data in mind.';
        this.welcomeOpennessText2 = 'See us at ';
        this.welcomeUsability = 'Ease of use';
        this.welcomeUsabilityText1 = 'You can create powerful visualizations and easy-to-read maps with just a few clicks. See the ';
        this.welcomeUsabilityText2 = ' for user guides and more';
        this.width = 'width';
        this.wiki = 'Project Wiki';
    }
    return Strings;
}());
exports.Strings = Strings;
