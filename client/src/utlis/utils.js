const getDropdownOption = (value) => {
    return {
        label: value,
        value: value
    }
};

export const getDropdownList = (valueList) => {
    return valueList.map(value => getDropdownOption(value));
}