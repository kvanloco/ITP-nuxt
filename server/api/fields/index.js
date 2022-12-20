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
      slug: 'projectref',
      type: 'text',
      // validation via watch
      required: true,
      minlength: 5,
      maxlength: 10,
      unique: false,
      // format output
      prefix: '',
      postfix: '-ax',
      space: '-',
      capitalize: false,
    },
    {
      title: 'Fieldname 2',
      subTitle: 'subtitle',
      initialInputValue: 'kieke boe',
      slug: 'projectref',
      type: 'text',
      // validation via watch
      required: true,
      minlength: 5,
      maxlength: 10,
      unique: false,
      // format output
      prefix: '',
      postfix: '-ax',
      space: '-',
      capitalize: false,
    },
    {
      title: 'Fieldname 2',
      subTitle: 'subtitle',
      initialInputValue: 'kieke boe 2',
      slug: 'projectref',
      type: 'text',
      // validation via watch
      required: true,
      minlength: 5,
      maxlength: 10,
      unique: false,
      // format output
      prefix: '',
      postfix: '-ax',
      space: '-',
      capitalize: false,
    },
  ];

  return namingFields;
});
