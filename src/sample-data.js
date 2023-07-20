const data = {
    "customer-1": {
        "name": "Customer 1",
        "transactions": [
            {
                "date": 1684068386,
                "amount": 16
            },
            {
                "date": 1684665777,
                "amount": 145
            },
            {
                "date": 1683650308,
                "amount": 11
            },
            {
                "date": 1688874064,
                "amount": 286
            },
            {
                "date": 1685569505,
                "amount": 172
            },
            {
                "date": 1687330015,
                "amount": 255
            },
            {
                "date": 1686354468,
                "amount": 220
            },
            {
                "date": 1687030146,
                "amount": 133
            }
        ]
    },
    "customer-2": {
        "name": "Customer 2",
        "transactions": [
            {
                "date": 1684118623,
                "amount": 5
            },
            {
                "date": 1687859689,
                "amount": 273
            },
            {
                "date": 1684710127,
                "amount": 147
            },
            {
                "date": 1683530328,
                "amount": 244
            },
            {
                "date": 1680356954,
                "amount": 99
            },
            {
                "date": 1685545204,
                "amount": 92
            }
        ]
    },
    "customer-3": {
        "name": "Customer 3",
        "transactions": [
            {
                "date": 1686343919,
                "amount": 222
            },
            {
                "date": 1684079153,
                "amount": 50
            },
            {
                "date": 1685730270,
                "amount": 55
            },
            {
                "date": 1684420753,
                "amount": 203
            },
            {
                "date": 1686542816,
                "amount": 242
            },
            {
                "date": 1686640655,
                "amount": 260
            },
            {
                "date": 1686216751,
                "amount": 216
            },
            {
                "date": 1686677142,
                "amount": 111
            },
            {
                "date": 1686214523,
                "amount": 55
            },
            {
                "date": 1688865639,
                "amount": 74
            },
            {
                "date": 1680530939,
                "amount": 105
            }
        ]
    },
    "customer-4": {
        "name": "Customer 4",
        "transactions": [
            {
                "date": 1683228684,
                "amount": 61
            },
            {
                "date": 1683882250,
                "amount": 266
            },
            {
                "date": 1683335475,
                "amount": 88
            },
            {
                "date": 1686855446,
                "amount": 250
            },
            {
                "date": 1689872644,
                "amount": 114
            },
            {
                "date": 1681410430,
                "amount": 208
            },
            {
                "date": 1687289792,
                "amount": 234
            },
            {
                "date": 1680435079,
                "amount": 47
            },
            {
                "date": 1684825290,
                "amount": 280
            },
            {
                "date": 1683233829,
                "amount": 148
            },
            {
                "date": 1684293938,
                "amount": 140
            },
            {
                "date": 1683585550,
                "amount": 255
            },
            {
                "date": 1683174580,
                "amount": 11
            },
            {
                "date": 1687976787,
                "amount": 11
            }
        ]
    },
    "customer-5": {
        "name": "Customer 5",
        "transactions": [
            {
                "date": 1681535041,
                "amount": 279
            },
            {
                "date": 1681808276,
                "amount": 147
            }
        ]
    },
    "customer-6": {
        "name": "Customer 6",
        "transactions": [
            {
                "date": 1687890278,
                "amount": 291
            },
            {
                "date": 1681117101,
                "amount": 85
            },
            {
                "date": 1685004009,
                "amount": 246
            },
            {
                "date": 1685069424,
                "amount": 114
            },
            {
                "date": 1683193495,
                "amount": 143
            },
            {
                "date": 1688666148,
                "amount": 41
            },
            {
                "date": 1687979315,
                "amount": 89
            },
            {
                "date": 1687763035,
                "amount": 296
            },
            {
                "date": 1685926677,
                "amount": 198
            },
            {
                "date": 1681524425,
                "amount": 288
            }
        ]
    },
    "customer-7": {
        "name": "Customer 7",
        "transactions": [
            {
                "date": 1681750238,
                "amount": 276
            }
        ]
    },
    "customer-8": {
        "name": "Customer 8",
        "transactions": [
            {
                "date": 1681370098,
                "amount": 93
            },
            {
                "date": 1683555086,
                "amount": 291
            }
        ]
    },
    "customer-9": {
        "name": "Customer 9",
        "transactions": [
            {
                "date": 1688257257,
                "amount": 41
            },
            {
                "date": 1686167333,
                "amount": 202
            },
            {
                "date": 1680492233,
                "amount": 112
            },
            {
                "date": 1680704518,
                "amount": 228
            },
            {
                "date": 1688757216,
                "amount": 104
            },
            {
                "date": 1684243484,
                "amount": 162
            },
            {
                "date": 1683620479,
                "amount": 152
            },
            {
                "date": 1681888793,
                "amount": 56
            },
            {
                "date": 1680327722,
                "amount": 15
            },
            {
                "date": 1686329930,
                "amount": 262
            }
        ]
    },
    "customer-10": {
        "name": "Customer 10",
        "transactions": [
            {
                "date": 1684084658,
                "amount": 68
            },
            {
                "date": 1685670081,
                "amount": 123
            },
            {
                "date": 1686726689,
                "amount": 157
            },
            {
                "date": 1682222435,
                "amount": 141
            },
            {
                "date": 1681857831,
                "amount": 299
            }
        ]
    }
};

export const fetchData = () => new Promise((resolve) => {
    resolve(data);
});
