export default defineEventHandler(async () => {
  var result = await fetch('https://jsonplaceholder.typicode.com/posts');
  var data = await result.json();
  console.log('ran backend function');
  //console.log(data);

  const namingFields = [
    {
      title: 'Fieldname 1',
      subTitle: 'subtitle',
      initialInputValue: 'boe',
    },
    {
      title: 'Fieldname 2',
      subTitle: 'subtitle 2',
      initialInputValue: '',
    },
  ];

  return namingFields;
});
