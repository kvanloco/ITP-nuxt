export default defineEventHandler(async () => {
  var result = await fetch('https://jsonplaceholder.typicode.com/posts');
  var data = await result.json();
  console.log('ran backend function');
  //console.log(data);

  const namingFields = [
    {
      title: 'Fieldname 1',
      subTitle: 'subtitle',
      initialInputValue: '123',
      slug: 'projectref',
      type: 'text',
      // validation via watch
      required: true,
      minlength: 5,
      maxlength: 10,
      unique: false,
      // format output
      prefix: 'PMO',
      postfix: '',
      space: '-',
      capitalize: true,
    },
    {
      title: 'Fieldname 2',
      subTitle: 'subtitle',
      initialInputValue: '',
      slug: 'projectref',
      type: 'text',
      // validation via watch
      required: true,
      minlength: 5,
      maxlength: 10,
      unique: false,
      // format output
      prefix: '',
      postfix: '',
      space: '-',
      capitalize: false,
    },
    {
      title: 'Fieldname 2',
      subTitle: 'subtitle',
      initialInputValue: '',
      slug: 'projectref',
      type: 'number',
      // validation via watch
      required: true,
      minlength: 3,
      maxlength: 3,
      unique: false,
      // format output
      prefix: '',
      postfix: '',
      space: '-',
      capitalize: false,
    },
    {
      title: 'Fieldname 2',
      subTitle: 'subtitle',
      initialInputValue: '',
      slug: 'projectref',
      type: 'number',
      // validation via watch
      required: true,
      minlength: 2,
      maxlength: 2,
      unique: false,
      // format output
      prefix: '',
      postfix: '',
      space: '-',
      capitalize: false,
    },
  ];

  return namingFields;
});
