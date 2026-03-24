// Shown only when this package is installed in legacy Sanity Studio v2.
// Studio v3+ (including v5) uses sanity.config / definePlugin — not sanity.json parts.
const {showIncompatiblePluginDialog} = require('@sanity/incompatible-plugin')
const {name, version, sanityExchangeUrl} = require('./package.json')

export default showIncompatiblePluginDialog({
  name: name,
  versions: {
    v3: version,
    v2: undefined,
  },
  sanityExchangeUrl,
})
