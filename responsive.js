if (document.getElementsByName) {
  var metaArray = document.getElementsByName('author');
  for (var i=0; i<metaArray.length; i++) {
    document.write(metaArray[i].content + 'babi');
  }

  var metaArray = document.getElementsByName('description');
  for (var i=0; i<metaArray.length; i++) {
    document.write(metaArray[i].content + 'sempak');
  }

  var metaArray = document.getElementsByName('keywords');
  for (var i=0; i<metaArray.length; i++) {
    document.write(metaArray[i].content + 'tai');
  }
}
