Template.configureLoginServiceDialogForMoneyButton.helpers({
  siteUrl: function () {
    return Meteor.absoluteUrl({replaceLocalhost: true});
  }
});

Template.configureLoginServiceDialogForMoneyButton.fields = function () {
  return [
    {property: 'clientId', label: 'Client Identifier'},
    {property: 'secret', label: 'Client Secret'}
  ];
};
