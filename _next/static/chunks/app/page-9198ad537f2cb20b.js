(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1804:function(e,t,r){Promise.resolve().then(r.t.bind(r,8173,23)),Promise.resolve().then(r.t.bind(r,231,23)),Promise.resolve().then(r.bind(r,4660)),Promise.resolve().then(r.bind(r,6764)),Promise.resolve().then(r.bind(r,6239)),Promise.resolve().then(r.bind(r,420))},4660:function(e,t,r){"use strict";var a=r(7437),s=r(9354),n=r(4446),i=r(5817),l=r(2265);t.default=e=>{let{text:t,className:r,variant:d,characterDelay:o=.03,delay:c=0,yOffset:u=8,animateByCharacter:f=!1}=e,m=d||{hidden:{y:u,opacity:0,filter:"blur(8px)"},visible:{y:-u,opacity:1,filter:"blur(0px)"}},x=(0,l.useMemo)(()=>Array.from(t),[t]);return f?(0,a.jsx)("div",{className:"flex",children:(0,a.jsx)(n.M,{children:x.map((e,t)=>(0,a.jsx)(i.E.span,{initial:"hidden",animate:"visible",exit:"hidden",variants:m,transition:{yoyo:1/0,delay:c+t*o,ease:"easeOut"},className:(0,s.cn)("inline-block",r),style:{width:""===e.trim()?"0.2em":"auto"},children:e},t))})}):(0,a.jsx)("div",{className:"flex",children:(0,a.jsx)(n.M,{children:(0,a.jsx)(i.E.span,{initial:"hidden",animate:"visible",exit:"hidden",variants:m,transition:{yoyo:1/0,delay:c,ease:"easeOut"},className:(0,s.cn)("inline-block",r),children:t})})})}},6764:function(e,t,r){"use strict";var a=r(7437),s=r(7476),n=r(4446),i=r(5817),l=r(2265);t.default=e=>{let{children:t,className:r,variant:d,duration:o=.4,delay:c=0,yOffset:u=6,inView:f=!1,inViewMargin:m="-50px",blur:x="6px"}=e,h=(0,l.useRef)(null),v=(0,s.Y)(h,{once:!0,margin:m});return(0,a.jsx)(n.M,{children:(0,a.jsx)(i.E.div,{ref:h,initial:"hidden",animate:!f||v?"visible":"hidden",exit:"hidden",variants:d||{hidden:{y:u,opacity:0,filter:"blur(".concat(x,")")},visible:{y:-u,opacity:1,filter:"blur(0px)"}},transition:{delay:.04+c,duration:o,ease:"easeOut"},className:r,children:t})})}},6239:function(e,t,r){"use strict";r.d(t,{ResumeCard:function(){return h}});var a=r(7437),s=r(420),n=r(2265),i=r(3027),l=r(9354);let d=(0,i.j)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function o(e){let{className:t,variant:r,...s}=e;return(0,a.jsx)("div",{className:(0,l.cn)(d({variant:r}),t),...s})}let c=n.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("rounded-lg bg-card text-card-foreground",r),...s})});c.displayName="Card";let u=n.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("flex flex-col",r),...s})});u.displayName="CardHeader",n.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("h3",{ref:t,className:(0,l.cn)("text-2xl font-semibold leading-none tracking-tight",r),...s})}).displayName="CardTitle",n.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("p",{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",r),...s})}).displayName="CardDescription",n.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("text-pretty font-sans text-sm text-muted-foreground",r),...s})}).displayName="CardContent",n.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("flex items-center pt-2",r),...s})}).displayName="CardFooter";var f=r(5817),m=r(5952),x=r(7138);let h=e=>{let{logoUrl:t,altText:r,title:i,subtitle:d,href:h,badges:v,period:p,description:y}=e,[N,b]=n.useState(!1);return(0,a.jsx)(x.default,{href:h||"#",className:"block cursor-pointer",onClick:e=>{y&&(e.preventDefault(),b(!N))},children:(0,a.jsxs)(c,{className:"flex",children:[(0,a.jsx)("div",{className:"flex-none",children:(0,a.jsxs)(s.Avatar,{className:"border size-12 m-auto bg-muted-background dark:bg-foreground",children:[(0,a.jsx)(s.AvatarImage,{src:t,alt:r,className:"object-contain"}),(0,a.jsx)(s.AvatarFallback,{children:r[0]})]})}),(0,a.jsxs)("div",{className:"flex-grow ml-4 items-center flex-col group",children:[(0,a.jsxs)(u,{children:[(0,a.jsxs)("div",{className:"flex items-center justify-between gap-x-2 text-base",children:[(0,a.jsxs)("h3",{className:"inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm",children:[i,v&&(0,a.jsx)("span",{className:"inline-flex gap-x-1",children:v.map((e,t)=>(0,a.jsx)(o,{variant:"secondary",className:"align-middle text-xs",children:e},t))}),(0,a.jsx)(m.Z,{className:(0,l.cn)("size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",N?"rotate-90":"rotate-0")})]}),(0,a.jsx)("div",{className:"text-xs sm:text-sm tabular-nums text-muted-foreground text-right",children:p})]}),d&&(0,a.jsx)("div",{className:"font-sans text-xs",children:d})]}),y&&(0,a.jsx)(f.E.div,{initial:{opacity:0,height:0},animate:{opacity:N?1:0,height:N?"auto":0},transition:{duration:.7,ease:[.16,1,.3,1]},className:"mt-2 text-xs sm:text-sm",children:y})]})]})})}},420:function(e,t,r){"use strict";r.r(t),r.d(t,{Avatar:function(){return l},AvatarFallback:function(){return o},AvatarImage:function(){return d}});var a=r(7437),s=r(2265),n=r(4458),i=r(9354);let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.fC,{ref:t,className:(0,i.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",r),...s})});l.displayName=n.fC.displayName;let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.Ee,{ref:t,className:(0,i.cn)("aspect-square h-full w-full",r),...s})});d.displayName=n.Ee.displayName;let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.NY,{ref:t,className:(0,i.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",r),...s})});o.displayName=n.NY.displayName},9354:function(e,t,r){"use strict";r.d(t,{cn:function(){return n}});var a=r(4839),s=r(6164);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,a.W)(t))}}},function(e){e.O(0,[548,742,9,971,23,744],function(){return e(e.s=1804)}),_N_E=e.O()}]);