import { defineConfig } from 'unocss'

export default defineConfig({
  rules: [
    ['white-nowrap', {
      'white-space': 'nowrap'
    }],
    ['center-flex', {
      'display': 'flex',
      'justify-content': 'center',
      'align-items': 'center'
    }],
    ['filler', {
      'position': 'absolute',
      'top': 0,
      'left': 0,
      'width': '100%',
      'height': '100%'
    }],
    ['filler-fixed', {
      'position': 'fixed',
      'top': 0,
      'left': 0,
      'width': '100%',
      'height': '100%'
    }],
    ['montserrat', {
      'font-family': 'Montserrat, sans-serif'
    }],
    ['fzr-32', {
      'font-size': 'clamp(20px, calc(1.25rem + ((1vw - 3.2px) * 1.7647)), 32px)'
    }],
    ['fzr-24', {
      'font-size': 'clamp(18px, calc(1.125rem + ((1vw - 3.2px) * 0.8824)), 24px)'
    }],
    ['fzr-20', {
      'font-size': 'clamp(15px, calc(0.9375rem + ((1vw - 3.2px) * 0.7353)), 20px)'
    }],
    ['fzr-18', {
      'font-size': 'clamp(14px, calc(0.875rem + ((1vw - 3.2px) * 0.5882)), 18px)'
    }],
    ['fzr-16', {
      'font-size': 'clamp(14px, calc(0.875rem + ((1vw - 3.2px) * 0.2941)), 16px)'
    }],
    ['fzr-14', {
      'font-size': 'clamp(12px, calc(0.75rem + ((1vw - 3.2px) * 0.2941)), 14px)'
    }],
    ['fzr-13', {
      'font-size': 'clamp(11px, calc(0.6875rem + ((1vw - 3.2px) * 0.2941)), 13px)'
    }],
    ['fzr-12', {
      'font-size': 'clamp(9px, calc(0.5625rem + ((1vw - 3.2px) * 0.4412)), 12px)'
    }],
    ['fzr-10', {
      'font-size': 'clamp(8px, calc(0.5rem + ((1vw - 3.2px) * 0.2941)), 10px)'
    }],
    ['m-0-a', {
      'margin': '0 auto'
    }],
    ['nowrap', {
      'white-space': 'nowrap'
    }],
    [/^m-0-a-(\d+)px$/, (value: RegExpMatchArray) => ({
      'margin': `0 auto ${value[1]}px`
    })],
    [/^m-(\d+)-a$/, (value: RegExpMatchArray) => ({
      'margin': `${value[1]}px auto`
    })],
    [/^h-(\d+)$/, (value: RegExpMatchArray) => ({
      'height': `${value[1]}px`
    })],
    [/^h-(\d+)p$/, (value: RegExpMatchArray) => ({
      'height': `${value[1]}%`
    })],
    [/^w-(\d+)p$/, (value: RegExpMatchArray) => ({
      'width': `${value[1]}%`
    })],
    [/^lh-(\d+)p$/, (value: RegExpMatchArray) => ({
      'line-height': `${value[1]}%`
    })],
    [/^wc-(\d+)-(\d+)$/, (value: RegExpMatchArray) => ({
      'width': `calc(${value[1]}% - ${value[2]}px)`
    })],
    [/^max-w-(\d+)px$/, (value: RegExpMatchArray) => ({
      'max-width': `${value[1]}px`
    })],
    [/^max-w-(\d+)-wc-(\d+)-(\d+)$/, (value: RegExpMatchArray) => ({
      'max-width': `${value[1]}px`,
      'width': `calc(${value[2]}% - ${value[3]}px)`
    })],
    [/^hc-(\d+)-(\d+)$/, (value: RegExpMatchArray) => ({
      'height': `calc(${value[1]}vh - ${value[2]}px)`
    })],
    [/^p-(\d+)-(\d+)$/, (value: RegExpMatchArray) => ({
      'padding': `${value[1]}px ${value[2]}px`
    })],
    [/^pb-(\d+)p$/, (value: RegExpMatchArray) => ({
      'padding-bottom': `${value[1]}%`
    })],
    [/^p-(\d+)-(\d+)-(\d+)$/, (value: RegExpMatchArray) => ({
      'padding': `${value[1]}px ${value[2]}px ${value[3]}px`
    })],
    [/^p-(\d+)-(\d+)-(\d+)-(\d+)$/, (value: RegExpMatchArray) => ({
      'padding': `${value[1]}px ${value[2]}px ${value[3]}px ${value[4]}px`
    })],
    [/^m-(\d+)-(\d+)$/, (value: RegExpMatchArray) => ({
      'margin': `${value[1]}px ${value[2]}px`
    })],
    [/^m-(\d+)-(\d+)-(\d+)$/, (value: RegExpMatchArray) => ({
      'margin': `${value[1]}px ${value[2]}px ${value[3]}px`
    })],
    [/^m-(\d+)-(\d+)-(\d+)-(\d+)$/, (value: RegExpMatchArray) => ({
      'margin': `${value[1]}px ${value[2]}px ${value[3]}px ${value[4]}px`
    })],
    [/^top-(\d+)p$/, (value: RegExpMatchArray) => ({
      'top': `${value[1]}%`
    })],
    [/^top-(\d+)px$/, (value: RegExpMatchArray) => ({
      'top': `${value[1]}px`
    })],
    [/^left-(\d+)px$/, (value: RegExpMatchArray) => ({
      'left': `${value[1]}px`
    })],
    [/^left-(\d+)p$/, (value: RegExpMatchArray) => ({
      'left': `${value[1]}%`
    })],
    [/^bottom-(\d+)px$/, (value: RegExpMatchArray) => ({
      'bottom': `${value[1]}px`
    })],
    [/^bottom-(\d+)p$/, (value: RegExpMatchArray) => ({
      'bottom': `${value[1]}%`
    })],
    [/^right-(\d+)px$/, (value: RegExpMatchArray) => ({
      'right': `${value[1]}px`
    })],
    [/^right-(\d+)p$/, (value: RegExpMatchArray) => ({
      'right': `${value[1]}%`
    })],
    [/^translate-y-(\d+)p$/, (value: RegExpMatchArray) => ({
      'transform': `translateY(${value[2]}%)`
    })],
    [/^translate-x-(\d+)p$/, (value: RegExpMatchArray) => ({
      'transform': `translateX(${value[2]}%)`
    })],
    [/^translate-y-(\-)+(\d+)p$/, (value: RegExpMatchArray) => ({
      'transform': `translateY(-${value[2]}%)`
    })],
    [/^translate-x-(\-)+(\d+)p$/, (value: RegExpMatchArray) => ({
      'transform': `translateX(-${value[2]}%)`
    })],
    [/^translate-(\d+)p-(\d+)p$/, (value: RegExpMatchArray) => ({
      'transform': `translate(${value[1]}%, ${value[2]}%)`
    })],
    [/^translate-(\d+)p-(\d+)p-rotate-(\d+)$/, (value: RegExpMatchArray) => ({
      'transform': `translate(${value[1]}%, ${value[2]}%) rotate(${value[3]}deg)`
    })],
    [/^translate-(\-)+(\d+)p-(\-)+(\d+)p$/, (value: RegExpMatchArray) => ({
      'transform': `translate(-${value[2]}%, -${value[4]}%)`
    })],
    [/^translate-(\-)+(\d+)p-(\-)+(\d+)p-rotate-(\d+)$/, (value: RegExpMatchArray) => ({
      'transform': `translate(-${value[2]}%, -${value[4]}%) rotate(${value[5]}deg)`
    })],
    [/^bd-(\d+)-#([0-9a-fA-F]+)$/, (value: RegExpMatchArray) => ({
      'border': `${value[1]}px solid #${value[2]}`
    })],
    [/^bdb-(\d+)-#([0-9a-fA-F]+)$/, (value: RegExpMatchArray) => ({
      'border-bottom': `${value[1]}px solid #${value[2]}`
    })],
    [/^bdt-(\d+)-#([0-9a-fA-F]+)$/, (value: RegExpMatchArray) => ({
      'border-top': `${value[1]}px solid #${value[2]}`
    })],
    [/^bdl-(\d+)-#([0-9a-fA-F]+)$/, (value: RegExpMatchArray) => ({
      'border-left': `${value[1]}px solid #${value[2]}`
    })],
    [/^bdr-(\d+)-#([0-9a-fA-F]+)$/, (value: RegExpMatchArray) => ({
      'border-right': `${value[1]}px solid #${value[2]}`
    })],
    [/^bg-([0-9a-fA-F]+)$/, (value: RegExpMatchArray) => ({
      'background-color': `#${value[1]}`
    })],
    [/^bg-rgba-(\d+)-(\d+)-(\d+)-(\d+)$/, (value: RegExpMatchArray) => ({
      'background-color': `rgba(${value[1]}, ${value[2]}, ${value[3]}, ${+value[4] / 100})`
    })],
    [/^shadow-(\d+)-(\d+)-(\d+)-(\d+)-(\d+)-(\d+)-(\d+)-(\d+)$/, (value: RegExpMatchArray) => ({
      'box-shadow': `${value[1]}px ${value[2]}px ${value[3]}px ${value[4]}px rgba(${value[5]}, ${value[6]}, ${value[7]}, ${+value[8] / 100})`
    })],
    [/^transition-(\.)?([0-9]{1,2})?$/, (value: RegExpMatchArray) => ({
      'transition': `${value[1] === '.' ? '.' : value[1]}${value[2] ? value[2] : ''}s all ease-in-out`
    })],
    [/^hover:transition-(\.)?([0-9]{1,2})?$/, (value: RegExpMatchArray) => ({
      'transition': `${value[1] === '.' ? '.' : value[1]}${value[2] ? value[2] : ''}s all ease-in-out`
    })],
  ],
  theme: {
    colors: {
      brand: {
        'primary': 'hsl(171, 100%, 41%)',
        'light': 'hsl(0, 0%, 96%)',
        'dark': 'hsl(0, 0%, 21%)',
        'link': 'hsl(217, 71%, 53%)',
        'info': 'hsl(204, 86%, 53%)',
        'success': 'hsl(141, 53%, 53%)',
        'warning': 'hsl(48, 100%, 67%)',
        'danger': 'hsl(348, 100%, 61%)',
        'title': '#004700',
        'subtitle': '#1a1a1a',
        'greenthree': '#009900',
        'grey': '#666666',
      },
      platform: {
        green: {
          one: '#005B4C',
          two: '#007740',
          three: '#009126',
          four: '#01AA00',
          five: '#3DB822',
          six: '#72C544',
          seven: '#A0D166',
          eight: '#C6DD88',
          nine: '#E3E7AA',
          ten: '#F1ECCC'
        },
        pb: {
          one: '#1A1A1A',
          two: '#3B3B3B',
          three: '#5B5B5B',
          four: '#7C7C7C',
          five: '#9D9D9D',
          six: '#BDBDBD',
          seven: '#DEDEDE',
          eight: '#E9E9E9',
          nine: '#F4F4F4',
          ten: '#FFFFFF',
          eleven: 'rgba(0,0,0,0)'
        },
        error: '#D24B4E'
      }
    },
    breakpoints: {
      'xs': '400px',
      'xxs': '480px',
      'sm': '640px',
      'md': '768px',
      'mxd': '850px',
      'lg': '1024px',
      'xlg': '1160px',
      'xl': '1280px',
      '2xl': '1350px',
      '3xl': '1536px',
    }
  }
})