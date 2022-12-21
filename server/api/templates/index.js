export default defineEventHandler(async () => {
  const templatesData = [
    {
      title: 'Template Name 1',
      description:
        'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren &#x27;60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.',
      examples: [
        '001_Lorem-ipsum_001_v45',
        '001_Lorem-ipsum_001_v45',
        '001_Lorem-ipsum_001_v45',
      ],
      username: 'Username 1',
      creationDate: '01/01/2022',
      categorie: 'categorie 1',
      teamname: 'teamname 1',
      fields: [
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
      ],
    },
    {
      title: 'Template Name 2',
      description:
        'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font.',
      examples: [
        '001_Lorem-ipsum_001_v45',
        '001_Lorem-ipsum_001_v45',
        '001_Lorem-ipsum_001_v45',
      ],
      username: 'Username 2',
      creationDate: '01/01/2022',
      categorie: 'categorie 2',
      teamname: 'teamname 2',
    },
    {
      title: 'Template Name 3',
      description:
        'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren &#x27;60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.',
      examples: [
        '001_Lorem-ipsum_001_v45',
        '001_Lorem-ipsum_001_v45',
        '001_Lorem-ipsum_001_v45',
      ],
      username: 'Username 3',
      creationDate: '01/01/2022',
      categorie: 'categorie 3',
      teamname: 'teamname 3',
    },
  ];

  return templatesData;
});
