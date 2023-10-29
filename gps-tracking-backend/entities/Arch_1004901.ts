import { Column, Entity } from 'typeorm';

@Entity('arch_1004901', { schema: 'gpstrackerdb' })
export class Arch_1004901 {
  @Column('datetime', { primary: true, name: 'date' })
  date: Date;

  @Column('int', { primary: true, name: 'id_device' })
  idDevice: number;

  @Column('int', { name: 'speed' })
  speed: number;

  @Column('int', { name: 'fuel' })
  fuel: number;

  @Column('varchar', { name: 'temp', length: 5 })
  temp: string;

  @Column('int', { name: 'X' })
  x: number;

  @Column('int', { name: 'Y' })
  y: number;

  @Column('int', { name: 'Z' })
  z: number;

  @Column('tinyint', { name: 'ignition', width: 1 })
  ignition: boolean;

  @Column('int', { name: 'rpm', default: () => "'0'" })
  rpm: number;

  @Column('double', { name: 'fuel_rate', precision: 22, default: () => "'0'" })
  fuelRate: number;

  @Column('double', { name: 'tfu', precision: 22, default: () => "'0'" })
  tfu: number;

  @Column('double', { name: 'odo', precision: 22, default: () => "'0'" })
  odo: number;

  @Column('int', { name: 'SatInView', default: () => "'0'" })
  satInView: number;

  @Column('int', { name: 'signal', default: () => "'0'" })
  signal: number;

  @Column('int', { name: 'heading' })
  heading: number;

  @Column('tinyint', { name: 'charger', width: 1 })
  charger: boolean;

  @Column('double', { name: 'latitude', nullable: true, precision: 22 })
  latitude: number | null;

  @Column('double', { name: 'longitude', nullable: true, precision: 22 })
  longitude: number | null;

  @Column('tinyint', { name: 'state', nullable: true, width: 1 })
  state: boolean | null;

  @Column('int', { name: 'tram_id', nullable: true })
  tramId: number | null;

  @Column('tinyint', { name: 'validity', nullable: true, width: 1 })
  validity: boolean | null;

  @Column('int', { name: 'temp_engine', nullable: true })
  tempEngine: number | null;

  @Column('float', { name: 'accum_odo', nullable: true, precision: 12 })
  accumOdo: number | null;

  @Column('int', { name: 'do1', nullable: true })
  do1: number | null;

  @Column('int', { name: 'do2', nullable: true })
  do2: number | null;

  @Column('int', { name: 'do3', nullable: true })
  do3: number | null;

  @Column('int', { name: 'do4', nullable: true })
  do4: number | null;

  @Column('int', { name: 'di1', nullable: true })
  di1: number | null;

  @Column('int', { name: 'di2', nullable: true })
  di2: number | null;

  @Column('int', { name: 'di3', nullable: true })
  di3: number | null;

  @Column('int', { name: 'di4', nullable: true })
  di4: number | null;

  @Column('int', { name: 'an1', nullable: true })
  an1: number | null;

  @Column('int', { name: 'an2', nullable: true })
  an2: number | null;

  @Column('int', { name: 'an3', nullable: true })
  an3: number | null;

  @Column('int', { name: 'an4', nullable: true })
  an4: number | null;
}
