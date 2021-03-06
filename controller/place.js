const data = require('../data');

exports.placeGet = async (req, res, next) => {
  const place = [
    {
      _id: 'oeihfzesoi',
      name: 'first place',
      description: 'first map location',
      longitude: '0.2903209',
      latitude: '11.00090',
    },
    {
      _id: 'oerjk5dsi',
      name: 'second place',
      description: 'second map location',
      longitude: '0.2903209',
      latitude: '11.00090',
    },
  ];
  await res.status(200).json(data);
};

// module.exports = placeGet;
