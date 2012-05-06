/*jshint node:true evil:true asi:true */
/*globals END:false, NEWLINE:false, SEMICOLON:false, RIGHT_CURLY:false */

var narcs = require('./narcs')

eval(narcs.definitions.consts)

var ins

narcs.parser.Parser.prototype.MagicalSemicolon = function MagicalSemicolon () {
	var tt

	if (this.t.lineno === this.t.token.lineno) {
		tt = this.peekOnSameLine()

		if (tt !== END && tt !== NEWLINE && tt !== SEMICOLON && tt !== RIGHT_CURLY) {
			this.fail("missing ; before statement")
		}
	}

	if (!this.match(SEMICOLON)) {
		ins.push(this.t.token.lineno)
	}
}

function asify (s, f, l) {
	ins = []

	narcs.parser.parse(s, f, l)

	return ins
}

asify.insert = function (source, positions) {
	/* FIXME: This doesn't work for \r\n or \r, but neither does the join */
	var lines = source.split(/\n/g)
	var ln

	for (ln=0; ln<lines.length; ln++) {
		if (positions.indexOf(ln + 1) !== -1) {
			lines[ln] += ';'
		}
	}

	/* FIXME: We need to use the same line breaks that the file originally had */
	return lines.join('\n')
}

module.exports = asify
