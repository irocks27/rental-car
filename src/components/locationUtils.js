import usePlacesAutocomplete from "use-places-autocomplete";

export const useAddressAutocomplete = () => {
    const { suggestions, setValue, clearSuggestions } = usePlacesAutocomplete();

    const fetchSuggestions = (input) => {
        setValue(input); // Trigger API for suggestions
    };

    return { suggestions, fetchSuggestions, clearSuggestions };
};

//AIzaSyDqX-md6EGAU7nuCaTZ_tS0fYYg8AUiAyE - google api key to use