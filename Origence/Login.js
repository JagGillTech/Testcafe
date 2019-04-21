import testCafeFactory, {
  Selector
} from 'testcafe';
import {
  Role
} from 'testcafe';
import {
  login
} from './helper';



const origenceUrl = 'https://quantumwebqa4.qa.apps.pcf.nonprod.cudirect.com/QLoginPage.aspx';

fixture `Login`
  .page `https://quantumwebqa4.qa.apps.pcf.nonprod.cudirect.com/QLoginPage.aspx`;


const MortgageBanker = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\MortgageBanker',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


/* const MortgageBankerManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\MortgageBankerManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
}); */


const Processor = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\Processor',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});

const ProcessorManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\ProcessorManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


const ProcessorAssociate = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\ProcessorAssociate',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


const ProcessorAssociateManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\ProcessorAssociateManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


const PricingSpecialist = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\PricingSpecialist',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


const PricingManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\PricingManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


const Underwriter = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\Underwriter',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


const UnderwriterManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\UnderwriterManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


const TransactionManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\TransactionManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


const ClientExperienceManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\ClientExperienceManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


const CreditOfficer = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\CreditOfficer',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


const CreditOfficerManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\CreditOfficerManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


const Closer = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\Closer',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


const CloserManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\CloserManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});

const Funder = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\Funder',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


const FunderManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\FunderManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


const Shipping = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\Shipping',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


const ShippingManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\ShippingManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});




const Compliance = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\Compliance',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


const ComplianceManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\ComplianceManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


const QASpecialist = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\QASpecialist',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


const QASpecialistManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\QASpecialistManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


const MailRoom = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\MailRoom',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


const MailRoomManager = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\MailRoomManager',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});

const ClientAdmin = Role(origenceUrl, async t => {
  await login({
    userName: 'NYB\\ClientAdmin',
    password: 'DelForMayor18!',
    t,
  }), {
    preserveUrl: true
  }
});


test('My first test', async t => {
  await t
   // .useRole(MortgageBankerManager)


    .useRole(Processor)


    .useRole(Underwriter)
    .useRole(MortgageBanker)
    //.useRole(MortgageBankerManager)
    .useRole(Processor)
    .useRole(ProcessorManager)
    .useRole(ProcessorAssociate)
    .useRole(ProcessorAssociateManager)
    .useRole(PricingSpecialist)
    .useRole(PricingManager)
    .useRole(Underwriter)
    .useRole(UnderwriterManager)
    .useRole(TransactionManager)
    .useRole(ClientExperienceManager)
    .useRole(CreditOfficer)
    .useRole(CreditOfficerManager)
    .useRole(Closer)
    .useRole(CloserManager)
    .useRole(Funder)
    .useRole(FunderManager)
    .useRole(Shipping)
    .useRole(ShippingManager)
    .useRole(Compliance)
    .useRole(ComplianceManager)
    .useRole(QASpecialist)
    .useRole(QASpecialistManager)
    .useRole(MailRoom)
    .useRole(MailRoomManager)
    .useRole(ClientAdmin)


    .wait(100);
});