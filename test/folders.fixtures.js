function makeFoldersArray() {
  return [
    {
      name: 'Test1',
      id: 'e708e30b-b176-4b8a-ab85-b2cf0f37b37c'
    },
    {
      name: 'Test2',
      id: '2c36295f-ae4c-4e46-81a2-c38a0da5c11c'
    },
    {
      name: 'Test3',
      id: '1abee86a-816c-498f-ae7d-40c35557244c'
    }
  ];
}

function makeMaliciousFolder() {
  const maliciousFolder = {
    name: 'Test 4 <script>alert("xss");</script>',
    id: 'ace2252e-d987-4465-b4e0-97f41e69fcc4'
  };

  const expectedFolder = {
    name: 'Test 4 &lt;script&gt;alert("xss");&lt;/script&gt;',
    id: 'ace2252e-d987-4465-b4e0-97f41e69fcc4'
  };

  return {
    maliciousFolder,
    expectedFolder
  };
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
