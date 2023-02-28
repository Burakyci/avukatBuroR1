export class Address {
  city = '';
  district = '';
  postalCode = undefined;
  isDefault = false;
}

export class Profile {
  id;
  firstName = '';
  lastName = '';
  address = new Address();
  education;
  constructor(id, data) {
    this.id = id;
    if (data) {
      Object.assign(this, { ...data });
    }
  }
}