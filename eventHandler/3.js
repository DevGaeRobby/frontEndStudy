const obj = {
  a: {
    b: {
      c: [
        1,
        1,
        1,
        {
          d: {
            e: [
              {
                f: function () {
                  return { g: { h: 13 } };
                },
              },
            ],
          },
        },
      ],
    },
  },
};
console.log(obj.a.b.c[3].d.e[0].f().g.h); // 13 이 나오게 코드짜기*-+
