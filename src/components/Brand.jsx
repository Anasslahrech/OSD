import { site } from '../data/site'

// Logo OSD complet : symbole + nom en dessous, le texte occupe exactement
// la largeur du symbole (début du 1er bloc -> fin du dernier bloc).
// tone="dark"  : à poser sur un fond sombre (barres et texte clairs) ;
// tone="light" : à poser sur un fond clair (barres et texte bleu marine).
export default function Brand({ className = '', tone = 'dark', size = 68 }) {
  const orange = '#e3561a'
  const navy = '#00266a'
  const bars = tone === 'dark' ? '#9fbacb' : navy
  const text = tone === 'dark' ? 'currentColor' : navy

  return (
        <svg
      className={className}
      width={size}
      height={size * (1010 / 829)}
      viewBox="0 0 829 1010"
      role="img"
      aria-label={site.name}
      direction="ltr"
      style={{ direction: 'ltr', unicodeBidi: 'isolate' }}
    >
      {/* Bâtiments */}
      <path d="M178 400 L0 578 L0 807 L179 807Z" fill={orange} />
      <path d="M577 0 L181 255 L181 395 L398 526 L398 807 L577 807Z" fill={orange} />
      <path d="M649 382 L649 807 L828 807 L828 496Z" fill={orange} />

      {/* Lettres O S D */}
      <path
        fillRule="evenodd"
        fill={navy}
        d="M86 579 L71 581 L57 587 L48 595 L41 608 L39 617 L39 714 L44 730 L54 742 L71 750 L93 752 L108 750 L122 744 L131 736 L137 726 L140 715 L140 616 L134 599 L125 589 L108 581ZM84 583 L100 585 L106 591 L109 601 L109 730 L106 740 L95 748 L79 746 L73 740 L70 729 L70 602 L73 591Z"
      />
      <path
        fillRule="evenodd"
        fill={navy}
        d="M486 586 L460 592 L446 604 L439 621 L439 656 L444 667 L454 676 L495 688 L506 697 L508 701 L507 744 L500 753 L495 755 L483 755 L475 750 L470 737 L470 700 L439 700 L439 724 L444 738 L455 750 L471 757 L492 759 L516 754 L532 742 L540 722 L540 692 L534 677 L523 668 L483 657 L473 649 L470 641 L470 608 L472 600 L476 594 L483 590 L495 590 L505 597 L508 604 L508 645 L540 645 L540 623 L534 606 L525 596 L511 589Z"
      />
      <path
        fillRule="evenodd"
        fill={navy}
        d="M692 582 L692 749 L750 749 L769 745 L785 733 L793 712 L793 619 L789 605 L778 591 L764 584 L750 582ZM725 585 L744 586 L751 589 L758 596 L762 611 L761 728 L758 735 L751 742 L736 746 L725 746 L723 744 L723 587Z"
      />

      {/* Barres du bas */}
      <rect x="0" y="840" width="180" height="62" fill={bars} />
      <rect x="400" y="840" width="177" height="62" fill={bars} />
      <rect x="649" y="840" width="180" height="62" fill={bars} />

      {/* Nom : de x=0 à x=829, soit exactement la largeur du logo */}
            <text
        x="0"
        y="1000"
        textAnchor="start"
        fill={text}
        textLength="829"
        lengthAdjust="spacingAndGlyphs"
        fontFamily='"Barlow Condensed", "Arial Narrow", sans-serif'
        fontWeight="600"
        fontSize="84"
      >
        {site.name.toUpperCase()}
      </text>
    </svg>
  )
}