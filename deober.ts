import { parse } from "@babel/parser";
import traverse, { NodePath } from "@babel/traverse";
import * as t from "@babel/types";
import * as fs from "fs";
import generate from "@babel/generator";


let beautify_opts = {
  comments: true,
  minified: false,
  concise: false,
};

// The functions below were copied straight from the script
function C() {
  var e = [
    "join",
    "W6NcV3/cS8ko",
    "GOQNS",
    "\n    ",
    "kWSAW",
    "CKrcvLa",
    "B8okWPXz",
    "WR0Hka",
    "Aw5Uzxjive1m",
    "j8kuoCo+W6a",
    "AL/cVmofWOb7W4/dOrBcUq",
    "ErO3hmkd",
    "BSokB8kDgW",
    "CaFcUx3dVa",
    "m8olW6zt",
    "slice",
    "CwXdsKq",
    "Dw5KzwzPBMvK",
    "Cu9NqKS",
    "role",
    "C3rYAw5NAwz5",
    "CMvKAxjLy3rvCMW",
    "gCoUibDp",
    "WPv0W7bEoCkSWRSJjcK",
    "WOnoWQz5l8ocW5vUyq",
    "W6O/W4ZcMmkS",
    "CxvLCNLtzwXLy3rVCKfSBa",
    "0|6|4|5|2|7|1|3",
    "z2L3zfq",
    "classList",
    "C3bSAxq",
    "bCo6uttcOKO1mG",
    "W6q/cLyo",
    "mSoHfr1J",
    "W4CKWQy",
    "mtaWotK0ngDWEuPxCG",
    "map",
    "BM93",
    "u8oiqG",
    "nxVcKmoXW4u",
    '"] .add-to-cart-button .btn-primary',
    "3426GGDXUs",
    "bCoGkCouAmoaWQTrimoQWR/dJmoIWQqWewaeA2O3u8kbW6TqWOjNW7yVWOqcASkGWRPDuIZcHvawWRVdRSoNW6tcPSoQW4TmjLftBCkHWRxdHmkEWQKNnq",
    "sMzewLa",
    "undefined",
    "WOhdQSkVf8oW",
    "code",
    "ugXLyxnLihzLCMLMEsb5B3vYigfJy291BNqGBM93lG",
    "yMj5",
    "CMvTB3zL",
    "A2CTransactionWait",
    "WRipieVdNa",
    "ymkKumkleG",
    "BwfW",
    "iL1Bzgf0ys1IDxr0B24TC3rHDgu9iKferf9ut19dqvjuiL0",
    "shvWDLO",
    "FmkDjcmRW5xcH8k6W5BcV8koiqGcW7JcQ8oGW5/dJeKCCslcON/cPcHPW6r9hctcUa",
    "q09ou1rsquLorurFsvrftq",
    "A2v5CW",
    "mtu2v0HUvev3",
    "W7K5zaldICkia8ozWO3dKq/cHCoZrwhcQKtdSmk1WPZdQarMW408rNdcQmo3phzIW4H5gXrvW6LwW6nWd8kDW6VdMc43E8oxW4VcHINcOWDzWQdcGmoDWRvEWOLGWRb0WRiEctBdIwpcPrZcIbdcPeFdR8odWRGEWRa5rK48WQH6WQ/dSMq",
    "W67cILlcPCke",
    "TbpVx",
    "A0XXEfG",
    "zHGtdmks",
    "yLnVs1e",
    "3412521hvlCBy",
    "y3vYC29YoIbWB2LUDgvYicfPBxbVCNrHBNq7",
    "u2ftCuq",
    "B2jQzwn0",
    "1009944gpyJWr",
    "errorSummary",
    "otyYnJe0mevis3vssa",
    "seconds",
    "ersJK",
    "FIKlf8krWPzKyWmMWPyb",
    "D2j5Agq",
    "m3W1Fdj8mxW0Fda",
    "bCkYl8ofW5W",
    "W5qLWQybdmkoWPWpfd4",
    "yTskV",
    "futcVJNcKq",
    "C3bHBG",
    "jqyOEmoP",
    "ve10W68",
    "CgvAA04",
    "yIVcHCkozX5fW7DuDSosEa",
    "body",
    "imoqWOjyWPO",
    "symbol",
    "STbaO",
    "yxbgA3u",
    " { \n      background: ",
    "jYFdPCo1lCk/umkJW5JdSuBcLZxcSSoRW6tcHmk9W73dTNZdHY5UB8o8rdRdMHpcVCoUkrvtW61+y3hdRCkuyMeKWO9hihlcQCk/W4CyW6FdLmo1tmkWjsVcMH5aW4H8sSklWOBcGCktW5RcP8kYW7hcI8olWQpdO8kuWRBcSw0AeCkdWOBdV0ZdIvKrrCkEW6iXWPddVSoIlYfCcqfLASoKW7lcLYBdJJytWPiJjCoWouaRl2aXvCkVWRhcPCouxGZdRZGhW7TWtmkwW7G8WOddRHlcUrKmomkhpgpcULJcGmkgbmokWOKotSov",
    "8TUjQsQ",
    "tgT4seK",
    "VjTjr",
    "gtHmP",
    "AKfqq0m",
    "VpUuv",
    "mxWWFdj8ohW0FdD8m3W1Fdy",
    "concat",
    "KSUSV",
    "BKHOy0m",
    "zxDHsuG",
    "dftcQwJcKa",
    "WRFcO8obFui",
    "9626140EHKuRH",
    "cyzAU",
    "WRpcTSobf8oX",
    "DCoQWPLymG",
    "h0X+WQ8S",
    "DbXIs",
    "388879OSmUWU",
    "k8orCXZcNG",
    "zxjYB3jdB2rL",
    "purchaseTracker",
    "entries",
    "BwLUDxrLCW",
    "yKz0zg4",
    "C2T1swq",
    "W4uVWQWlh8kF",
    "remove",
    "qConhSoMnW",
    "PtNyD",
    "tVHJf",
    "zM9YrwfJAa",
    "object",
    "aqETY",
    "AIZcMeBdTq",
    "W5RdHtevWOC",
    "nJJMX",
    "CMvKAxjLy3rLza",
    "W7y7bu4jbW",
    "AM9PBG",
    "pwptg",
    "oMHVDMvY",
    "zMXVB3i",
    "s1nvu1y",
    "CvLuwu4",
    "WRa/o33dNa",
    "iaOGicaGica",
    "FWaMbSko",
    "s1fMq1m",
    "r3j4v3i",
    "p8osDCoSd8kiWPFcNhynyf7dRG",
    "y29Kzq",
    "a2LdCIj/W7m2ECoB",
    "WPvpWQX/kmoF",
    "lYa4BCo+",
    "obm8tCodW6y",
    "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",
    "q09ou1rsquLorurFsvrftv9qrvjqrvrvquW",
    "nZuWnJzty2jStMm",
    "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",
    "uSkNW4qi",
    "gSobWPbUWRy",
    "getResponseHeader",
    "constrained",
    "ngdcO3hcJW",
    "WOTmjqNdGW",
    "qOgBK",
    "yxrKqu4",
    "WQxcPSo1ua",
    "WR8xemkHWPP/W6pdI8kZymkFdCkM",
    "y29Uy2f0",
    "iZaWndzIzq",
    "rvLmq2y",
    "W40LWRSB",
    "WRvmv8ksWRbG",
    "exriF201WQOIDq",
    "yc0lnCkn",
    "rH8QbCkZ",
    "uCo4WPBdVCkw",
    "fCowW5PacW",
    "BgvUz3rO",
    "BvrYq2q",
    "vcZcJKNdPxe5CW",
    "s8oHWR7dHaJdPra",
    "zgH2v2fPDev4CgLYyxrPB25uAw1L",
    "BwLUlxDPzhrOoIaXodbWEcaHAw1WB3j0yw50oW",
    "vmkNF8kEWRVdOW",
    "function",
    "EgHY",
    "smo6Eq",
    "gmoHeajBlg9pFfRcSb3cUG57tSoGWQGOW69A",
    "npjtB",
    "DDhyQ",
    "CZHKP",
    "aMLjEhyZWRi7FSoiW5m",
    "tCoDs2FcKG",
    "ywrK",
    "WRtcLLJdRCkgkmo9B0JdGSouxq3cHuekotBcNCkJcmkGW6JcLSouCL7cNIm",
    "WOhdMCkqgSoK",
    "zxjYB3jtDw1Tyxj5",
    "replace",
    "W6ndvSoZW4S",
    "w2rHDgeTDgvZDc1ZyxzLzc1ZA3u9iG",
    "W4aVWRaTh8kiWPC",
    "BCkMf8oOW7i2W7FdLSkdWRDLW4DpBCoEdW3dSmoHW5NdO8kDWR3cMCkaySoJtwlcIK7cTXm",
    "mZG4odC5t1nTvvDv",
    "g37cJIJdJ3m4W4m8",
    "W53dRCkGemkraCo0cmkdASkzW5KroSkDWPhcPNqwW59CWRxdJcRcVH8vWRegqxZdIeqjpCkUWOfYnCoFEvVcICoWWOq",
    "DhbYAxu",
    "mmobW7m",
    "WQaaiMJdVq",
    "lMfKzc10BY1Jyxj0lwj1DhrVBI5Jlwj1DhrVBI1WCMLTyxj5w2rHDgeTC2T1lwLKpsi",
    "zfLnze4",
    "qtjdvhjHBNnHy3rPB25szwzLCMvUy2vjra",
    "W7BdQgS",
    "Dg9tDhjPBMC",
    "dQINn",
    "expiration",
    "2|0|5|4|3|1",
    "W58NqSoXAa",
    "adGZM",
    "C2v0sxrLBq",
    "sr-only",
    "whWds",
    "zNvUy3rPB24",
    "aXLUr",
    "rwHPtNi",
    "C2XPy2u",
    "W4uYWQCjcSkoWROxfdFcU30e",
    "c8oXrGRcSL0GlHP6n8oUWPFdLJZdR2C",
    "JRZPe",
    "KAuxa",
    "WRqXg2/dOG",
    "alert",
    "umoQbmo4d8o6ESoSWPCyWQu",
    "C2v0qxr0CMLIDxrL",
    "dhvWaitExpirationTime",
    "EK5nEeG",
    "HupvZ",
    "75066ScblNc",
    "innerHTML",
    "zHzDF",
    "nNWZFdf8nhWYFdv8ma",
    "gmo7wt3cUq",
    "DrJdOcVdLCkYW5NcSJPZW65qWO0",
    "W6LTtCogW7q",
    "setItem",
    "uvjxrw4",
    "mZCXzLrOuNrP",
    "parse",
    "iterator",
    "wvzczKy",
    "split",
    "WQ5lsW",
    "stringify",
    "k8kQbCocW70",
    "getItem",
    "x8oWWRpdOrK",
    "lMfKzc10BY1Jyxj0lwj1DhrVBI5Jlwj1DhrVBI1VDxrSAw5Lw2rHDgeTC2T1lwLKpsi",
    "vmopwh7cSa",
    "BIaEjCkwWQ5/Eru",
  ];
  return (C = function () {
    return e;
  })();
}

function $(e, t) {
  var n = C();
  return ($ = function (t, r) {
    var o = n[(t -= 173)];
    if (void 0 === $.FGmEFU) {
      var i = function (e) {
        for (
          var t, n, r = "", o = "", i = 0, a = 0;
          (n = e.charAt(a++));
          ~n && ((t = i % 4 ? 64 * t + n : n), i++ % 4)
            ? (r += String.fromCharCode(255 & (t >> ((-2 * i) & 6))))
            : 0
        )
          n =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(
              n
            );
        for (var c = 0, s = r.length; c < s; c++)
          o += "%" + ("00" + r.charCodeAt(c).toString(16)).slice(-2);
        return decodeURIComponent(o);
      },
        a = function (e, t) {
          var n,
            r,
            o = [],
            a = 0,
            c = "";
          for (e = i(e), r = 0; r < 256; r++) o[r] = r;
          for (r = 0; r < 256; r++)
            (a = (a + o[r] + t.charCodeAt(r % t.length)) % 256),
              (n = o[r]),
              (o[r] = o[a]),
              (o[a] = n);
          (r = 0), (a = 0);
          for (var s = 0; s < e.length; s++)
            (a = (a + o[(r = (r + 1) % 256)]) % 256),
              (n = o[r]),
              (o[r] = o[a]),
              (o[a] = n),
              (c += String.fromCharCode(
                e.charCodeAt(s) ^ o[(o[r] + o[a]) % 256]
              ));
          return c;
        };
      ($.dUbILz = a), (e = arguments), ($.FGmEFU = !0);
    }
    var c = n[0],
      s = t + c,
      u = e[s];
    return (
      u
        ? (o = u)
        : (void 0 === $.fdTGnt && ($.fdTGnt = !0),
          (o = $.dUbILz(o, r)),
          (e[s] = o)),
      o
    );
  })(e, t);
}

function Z(e, t) {
  var n = C();
  return (Z = function (t, r) {
    var o = n[(t -= 173)];
    if (void 0 === Z.ZNvZrN) {
      var i = function (e) {
        for (
          var t, n, r = "", o = "", i = 0, a = 0;
          (n = e.charAt(a++));
          ~n && ((t = i % 4 ? 64 * t + n : n), i++ % 4)
            ? (r += String.fromCharCode(255 & (t >> ((-2 * i) & 6))))
            : 0
        )
          n =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(
              n
            );
        for (var c = 0, s = r.length; c < s; c++)
          o += "%" + ("00" + r.charCodeAt(c).toString(16)).slice(-2);
        return decodeURIComponent(o);
      };
      (Z.dUVjeW = i), (e = arguments), (Z.ZNvZrN = !0);
    }
    var a = n[0],
      c = t + a,
      s = e[c];
    return s ? (o = s) : ((o = Z.dUVjeW(o)), (e[c] = o)), o;
  })(e, t);
}

function ne(e, t) {
  var n = C();
  return (ne = function (e, t) {
    return n[(e -= 173)];
  })(e, t);
}


// This function fixes the array and puts them into the correct order
!(function (e, t) {
  for (var n = Z, r = $, o = ne, i = e(); ;)
    try {
      if (
        431344 ==
        parseInt(o(233)) / 1 +
        (parseInt(r(399, "Eg3&")) / 2) * (-parseInt(n(179)) / 3) +
        -parseInt(n(411)) / 4 +
        parseInt(r(284, "ZMI%")) / 5 +
        (parseInt(n(273)) / 6) * (parseInt(n(363)) / 7) +
        (-parseInt(o(214)) / 8) * (-parseInt(o(186)) / 9) +
        -parseInt(o(227)) / 10
      )
        break;
      i.push(i.shift());
    } catch (e) {
      i.push(i.shift());
    }
})(C);

// Not going to fix these functions for TS

// Credit to Nero for the boilerplate code used here
// https://0x31.sh/

const script = fs.readFileSync("bestbuy.js", "utf-8");

const AST = parse(script, {});

traverse(AST, {
  CallExpression(path: NodePath<t.CallExpression>) {
    if (
      path.node.arguments.length == 2 &&
      path.node.arguments[0].type == "NumericLiteral" &&
      path.node.arguments[1].type == "StringLiteral"
    ) {
      let numLit = path.node.arguments[0] as t.NumericLiteral;
      let stringLit = path.node.arguments[1] as t.StringLiteral;

      path.replaceWith(t.stringLiteral($(numLit.value, stringLit.value)));
    }
  },

  VariableDeclaration(path: NodePath<t.VariableDeclaration>) {
    path.node.declarations.forEach((vardec: t.VariableDeclarator) => {
      let outerId = vardec.id as t.Identifier;
      let initId = vardec.init as t.Identifier;

      if (initId == null) {
        return;
      }

      let decodeFunc: Function;
      let ok = false;
      switch (initId.name) {
        case "k":
        case "Z":
          ok = true;
          decodeFunc = Z;
          break;
        case "P":
        case "ne":
          ok = true;
          decodeFunc = ne;
          break;
      }
      if (ok) {
        path.scope.path.traverse({
          CallExpression(path: NodePath<t.CallExpression>) {
            let id = path.node.callee as t.Identifier;
            if (
              path.node.arguments.length == 1 &&
              id.name == outerId.name &&
              path.node.arguments[0].type == "NumericLiteral"
            ) {
              let numLit = path.node.arguments[0] as t.NumericLiteral;

              path.replaceWith(t.stringLiteral(decodeFunc(numLit.value, "")));
            }
          },
        });
      }
    });
  },

});

traverse(AST, {
  MemberExpression(path: NodePath<t.MemberExpression>) {
    if (path.node.computed && path.node.property.type == "StringLiteral") {
      path.node.property = path.node.property as t.StringLiteral;
      if (t.isValidIdentifier(path.node.property.value)) {
        path.node.property = t.identifier(path.node.property.value);
        path.node.computed = false;
      }
    }
  },
});

const final_code = generate(AST, beautify_opts).code;

fs.writeFileSync("bb_deobed.js", final_code);
