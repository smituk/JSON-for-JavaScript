JSON = {
    stringify : function (I) {
        var N = Number,
        S = String,
        B = Boolean,
        A = Array,
        O = Object,
        C = N.prototype.Q = function () {
            return this.valueOf()
        },
        L = S.prototype.Q = function () {
            S.prototype.E = S.prototype.replace;
            return '"' + this.valueOf()
            .E(/\"/g, '\\"').E(/\'/g, "\\'").E(/\\b/g, '\\b')
            .E(/\\t/g, '\\t').E(/\\n/g, '\\n').E(/\\f/g, '\\f')
            .E(/\\r/g, '\\r').E(/\\\\/g, '\\\\') + '"';
        },
        R = B.prototype.Q = function () {
            return this.valueOf() ? 'true' : 'false'
        },
        M = A.prototype.Q = function () {
            var v = [],
            D = this,
            p;
            for (p in D)
                if (D.hasOwnProperty(p))
                    v.push(D[p].Q());
            return "[" + v.join(',') + "]"
        },
        G = O.prototype.Q = function () {
            var v = [],
            D = this,
            p;
            for (p in D)
                if (D.hasOwnProperty(p))
                    v.push('"' + p + '":' + D[p].Q());
            return "{" + v.join(',') + "}"
        },
        j = I.Q();
        delete C,
        L,
        R,
        M,
        G;
        return j
    },
    parse : function (j) {
        return eval('(' + j + ')')
    }
};
