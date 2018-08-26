export function getOwnPropertyDescriptors<T>(object: T): PropertyDescriptorMap {
    const propertyDescriptorMap: PropertyDescriptorMap = {};

    const propertyNames = Object.getOwnPropertyNames(object).forEach(key => {
        propertyDescriptorMap[key] = <PropertyDescriptor>Object.getOwnPropertyDescriptor(object, key);
    });

    return propertyDescriptorMap;
}
