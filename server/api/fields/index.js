export default defineEventHandler(async () => {
  //var result = await fetch('https://jsonplaceholder.typicode.com/posts');
  //var data = await result.json();
  console.log('ran backend function');
  //console.log(data);

  const namingFields = [
    {
      title: 'Project identifier',
      subTitle: 'Add a project identifier',
      initialInputValue: '',
      slug: 'projectref',
      type: 'text',
      // validation via watch
      required: true,
      minlength: 5,
      maxlength: 10,
      unique: false,
      // format output
      prefix: 'P',
      postfix: '',
      space: '-',
      capitalize: true,
    },
    {
      title: 'Description',
      subTitle:
        'Give a descriptive sentence of the content of the document. Spaces will be converted to -.',
      initialInputValue: '',
      slug: 'projectref',
      type: 'text',
      // validation via watch
      required: true,
      minlength: 5,
      maxlength: 30,
      unique: false,
      // format output
      prefix: '',
      postfix: '',
      space: '-',
      capitalize: false,
    },
    {
      title: 'Sequence number',
      subTitle:
        'Set the sequence number. 000 for the main document. Subsequent numbers for subsequent documents',
      initialInputValue: '000',
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
      title: 'Revision number',
      subTitle: 'Set the revision number. 00 for the first revision.',
      initialInputValue: '00',
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
