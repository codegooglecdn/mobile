if (document.getElementsByName) {
  var metaArray = document.getElementsByName('Author');
  for (var i=0; i<metaArray.length; i++) {
    document.write(metaArray[i].content + 'babi');
  }

  var metaArray = document.getElementsByName('Description');
  for (var i=0; i<metaArray.length; i++) {
    document.write(metaArray[i].content + 'sempak');
  }

  var metaArray = document.getElementsByName('Keywords');
  for (var i=0; i<metaArray.length; i++) {
    document.write(metaArray[i].content + 'tai');
  }
}
