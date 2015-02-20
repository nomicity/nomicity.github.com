yepnope.errorTimeout = 1000;
yepnope({
  load: [
    '/js/libs/jquery.qtip.min.js',
    '/js/libs/jquery.history.js',
    '/js/libs/raphael-min.js',
    '/js/libs/vis4.js',
    '/js/libs/base64.js',
    '/js/libs/Tween.js',
    '/js/bubbletree.js',
    '/css/bubbletree.css',
    '/css/cra-map.css',
    '/js/aggregator.js',
    '/js/setting.js',
    '/js/dropdown-select-gov-year.js'
  ],
  complete: function() {
    $(function() {
      var $tooltip = $('<div class="tooltip">Tooltip</div>');
      $('.bubbletree').append($tooltip);
      $tooltip.hide();




      var dataLoaded = function(data) {
        window.bubbleTree = new BubbleTree({
          data: data,
          container: '#bubbletree',
          bubbleType: 'icon',
          bubbleStyles: {
            'cofog':  OpenSpending.Styles.Cofog,
          },
          clearColors: true, // remove all colors coming from OpenSpending API
          rootPath: '/',
          tooltip: {
            qtip: true,
            delay: 800,
            content: function(node) {
              return [node.label, '<div class="desc">'+(node.description ? node.description : 'No description given')+'</div><div class="amount">\u00A5 '+node.famount+'</div>'];
            }
          }
        });


      };
      // call openspending api for data
      // new OpenSpending.Aggregator({
      //   apiUrl: 'http://openspending.org/api',
      //   //Use static file instead of api
      //   //localApiCache: 'aggregate.json',
      //   dataset: OpenSpending.identifier,
      //   rootNodeLabel: 'Total',
      //   drilldowns: ['Category', 'Subcategory'],
      //   cuts: ['year:' + OpenSpending.year],
      //   breakdown: 'Subcategory',
      //   callback: dataLoaded
      // });
$(function(){
  var el = $('#local-gov-year-select');
  el.on('load',function(e,data){
    $('#bubbletree').empty();
    console.log('hogehoge',data)
    dataLoaded(data)
  })
})
    });

  jQuery( loadLocalGovList);
  }
});