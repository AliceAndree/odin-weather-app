import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';

export const autocompleteLocation = async () => {
  const key = '4249c5ed31f04839a4d5cfb4472bfac1'; // todo : hide key in server env.

  const autocomplete = new GeocoderAutocomplete(
    document.getElementById('autocomplete'),
    `${key}`,
    {
      type: 'city',
      placeholder: 'Search for a City',
    },
  );

  return autocomplete;
};
