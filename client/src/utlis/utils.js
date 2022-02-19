const getDropdownOption = (value) => {
    return value;
};

export const getDropdownList = (valueList) => {
    return valueList.map(value => getDropdownOption(value));
}