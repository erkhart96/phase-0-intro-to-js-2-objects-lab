const employee = {
    name: 'Ben',
    streetAddress: '3798 Country Club Rd'
}

function updateEmployeeWithKeyAndValue (obj, key, value) {
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue (obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey (employee, key) {
    const newObj2 = {...employee}
    delete newObj2.name
    return newObj2;
}

function destructivelyDeleteFromEmployeeByKey (obj, key) {
    delete obj.name;
    return obj;
}