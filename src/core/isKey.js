import _ from 'lodash'
import { _Object } from './context'
import { reIsDeepProp, reIsPlainProp } from './regex'

export default function isKey(value, object) {
  if (_.isArray(value)) {
    return false
  }
  const type = typeof value
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || _.isSymbol(value)) {
    return true
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in _Object(object))
}
