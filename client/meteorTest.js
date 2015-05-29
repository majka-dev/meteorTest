var postsData = [
  {
    gender:'male',
    name: 'Benjamin',
    surname: 'Geyre',
    organisation: 'Hevon'
  },
  {
    gender:'female',
    name: 'Maria',
    surname: 'Nemcova',
    organisation: 'Momo'
  },
  {
    gender:'male',
    name: 'Berny',
    surname: 'Luky',
    organisation: 'Doribos'
  }
];

Template.eCommerce.helpers({
  address: postsData
});

Template.sablona.helpers({
  'toto': function(){
    if(this.gender == 'male'){
      return 'mr.';
    }
    else{
      return 'ms.';
    }
  }
});