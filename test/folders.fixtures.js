function makeFoldersArray() {
  return [
    
  ]
}

function makeMaliciousFolder() {

}

const dateParse = bookmark => ({
  ...bookmark,
  date_published: new Date(bookmark.date_published)
});

module.exports = {
  makeFoldersArray,
  makeMaliciousFolder,
  dateParse
};