
import React from 'react';

import { AntialergicosIcon } from './illustrations/AntialergicosIcon';
import { AntibioticosIcon } from './illustrations/AntibioticosIcon';
import { AntigripalesIcon } from './illustrations/AntigripalesIcon';
import { ColiriosIcon } from './illustrations/ColiriosIcon';
import { JarabesIcon } from './illustrations/JarabesIcon';
import { VitaminasIcon } from './illustrations/VitaminasIcon';
import { DefaultIcon } from './illustrations/DefaultIcon';
import { AnalgesicosIcon } from './illustrations/AnalgesicosIcon';
import { AntiacidosIcon } from './illustrations/AntiacidosIcon';
import { InhaladoresIcon } from './illustrations/InhaladoresIcon';
import { AntiespasmodicosIcon } from './illustrations/AntiespasmodicosIcon';
import { AntiparasitariosIcon } from './illustrations/AntiparasitariosIcon';
import { AntidiarreicosIcon } from './illustrations/AntidiarreicosIcon';
import { AnsioliticosIcon } from './illustrations/AnsioliticosIcon';
import { AntidepresivosIcon } from './illustrations/AntidepresivosIcon';
import { AntipireticosIcon } from './illustrations/AntipireticosIcon';
import { AntiepilepticosIcon } from './illustrations/AntiepilepticosIcon';
import { AntipsicoticosIcon } from './illustrations/AntipsicoticosIcon';
import { HipnoticosIcon } from './illustrations/HipnoticosIcon';
import { AnestesicosIcon } from './illustrations/AnestesicosIcon';
import { DiureticosIcon } from './illustrations/DiureticosIcon';
import { AntidiabeticosIcon } from './illustrations/AntidiabeticosIcon';
import { AntianemicosIcon } from './illustrations/AntianemicosIcon';
import { LaxantesIcon } from './illustrations/LaxantesIcon';
import { AntiemeticosIcon } from './illustrations/AntiemeticosIcon';
import { AntifungicosIcon } from './illustrations/AntifungicosIcon';
import { AntihemorragicosIcon } from './illustrations/AntihemorragicosIcon';
import { AntisepticosIcon } from './illustrations/AntisepticosIcon';
import { TuberculosisIcon } from './illustrations/TuberculosisIcon';
import { AntianginosoIcon } from './illustrations/AntianginosoIcon';
import { AntitromboticoIcon } from './illustrations/AntitromboticoIcon';
import { CorticoidesIcon } from './illustrations/CorticoidesIcon';
import { HipolipemianteIcon } from './illustrations/HipolipemianteIcon';
import { RelajanteMuscularIcon } from './illustrations/RelajanteMuscularIcon';
import { TerapiaTiroideaIcon } from './illustrations/TerapiaTiroideaIcon';
import { AntiasmaticoIcon } from './illustrations/AntiasmaticoIcon';
import { PartoIcon } from './illustrations/PartoIcon';
import { AnticonceptivosIcon } from './illustrations/AnticonceptivosIcon';
import { CardiotonicosIcon } from './illustrations/CardiotonicosIcon';
import { AntiarritmicosIcon } from './illustrations/AntiarritmicosIcon';
import { AntihipertensivosIcon } from './illustrations/AntihipertensivosIcon';
import { InmunosupresoresIcon } from './illustrations/InmunosupresoresIcon';
import { BetabloqueadoresIcon } from './illustrations/BetabloqueadoresIcon';


interface CategoryIllustrationProps {
  categoryId: string;
  className?: string;
}

const illustrationMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  antiespasmodicos: AntiespasmodicosIcon,
  inhaladores: InhaladoresIcon,
  vitaminas: VitaminasIcon,
  antiparasitarios: AntiparasitariosIcon,
  antigripales: AntigripalesIcon,
  antibioticos: AntibioticosIcon,
  jarabes: JarabesIcon,
  antialergicos: AntialergicosIcon,
  colirios: ColiriosIcon,
  analgesicos: AnalgesicosIcon,
  antidiarreicos: AntidiarreicosIcon,
  ansioliticos: AnsioliticosIcon,
  antidepresivos: AntidepresivosIcon,
  antipireticos: AntipireticosIcon,
  antiepilepticos: AntiepilepticosIcon,
  antipsicoticos: AntipsicoticosIcon,
  hipnoticos: HipnoticosIcon,
  anestesicos: AnestesicosIcon,
  antiacidos: AntiacidosIcon,
  diureticos: DiureticosIcon,
  antidiabeticos: AntidiabeticosIcon,
  antianemicos: AntianemicosIcon,
  laxantes: LaxantesIcon,
  antiemeticos: AntiemeticosIcon,
  antifungicos: AntifungicosIcon,
  antihemorragicos: AntihemorragicosIcon,
  antihistaminicos: AntialergicosIcon,
  antisepticos: AntisepticosIcon,
  tuberculosis: TuberculosisIcon,
  antianginoso: AntianginosoIcon,
  antitrombotico: AntitromboticoIcon,
  antiagregante: AntitromboticoIcon,
  corticoides: CorticoidesIcon,
  hipolipemiante: HipolipemianteIcon,
  relajantemuscular: RelajanteMuscularIcon,
  terapiatiroidea: TerapiaTiroideaIcon,
  antiasmatico: AntiasmaticoIcon,
  parto: PartoIcon,
  anticonceptivos: AnticonceptivosIcon,
  cardiotonicos: CardiotonicosIcon,
  antiarritmicos: AntiarritmicosIcon,
  antihipertensivos: AntihipertensivosIcon,
  inmunosupresores: InmunosupresoresIcon,
  betabloqueadores: BetabloqueadoresIcon,
};

export const CategoryIllustration: React.FC<CategoryIllustrationProps> = ({ categoryId, className }) => {
  const IllustrationComponent = illustrationMap[categoryId] || DefaultIcon;
  return <IllustrationComponent className={className} />;
};
