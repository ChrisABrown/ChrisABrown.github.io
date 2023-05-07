import { MenuItem } from './Model'

export class MissingFieldError extends Error {}

export function validateAsMenuItemEntry(arg: any) {
  if (!(arg as MenuItem).name) {
    throw new MissingFieldError('Value for name required!')
  }
  if (!(arg as MenuItem).productType) {
    throw new MissingFieldError('Value for productType required!')
  }
  if (!(arg as MenuItem).price) {
    throw new MissingFieldError('Value for price required!')
  }
}
