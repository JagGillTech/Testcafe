import testCafeFactory, {
  Selector,
  t
} from 'testcafe';
import {
  Role
} from 'testcafe';

import {
  login
} from './helper';




const origenceUrl = 'https://quantumwebqa4.qa.apps.pcf.nonprod.cudirect.com/QLoginPage.aspx';



export const Processor = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\Processor',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});



export const MortgageBanker = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\MortgageBanker',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


export const MortgageBankerManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\MortgageBankerManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});



export const ProcessorManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\ProcessorManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


export const ProcessorAssociate = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\ProcessorAssociate',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


export const ProcessorAssociateManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\ProcessorAssociateManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


export const PricingSpecialist = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\PricingSpecialist',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


export const PricingManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\PricingManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


   export const Underwriter = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\Underwriter',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});
 

export const UnderwriterManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\UnderwriterManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


export const TransactionManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\TransactionManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


export const ClientExperienceManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\ClientExperienceManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


export const CreditOfficer = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\CreditOfficer',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


export const CreditOfficerManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\CreditOfficerManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


export const Closer = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\Closer',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


export const CloserManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\CloserManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});

export const Funder = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\Funder',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


export const FunderManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\FunderManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


export const Shipping = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\Shipping',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


export const ShippingManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\ShippingManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});




export const Compliance = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\Compliance',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


export const ComplianceManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\ComplianceManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


export const QASpecialist = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\QASpecialist',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


export const QASpecialistManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\QASpecialistManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


export const MailRoom = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\MailRoom',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


export const MailRoomManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\MailRoomManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});

export const ClientAdmin = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\ClientAdmin',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});