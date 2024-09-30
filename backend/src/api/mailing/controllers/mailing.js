'use strict';
/**
 * A set of functions called "actions" for `email`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    const body = ctx.request.body

    const email = body.find(item => item.email !== undefined).email
    const formId = body.find(item => item.formId !== undefined).formId
    const mailId = body.find(item => item.mailId !== undefined).mailId

    const arrayNaam = body.find(item => item.Naam !== undefined)
    const Naam = arrayNaam ? arrayNaam.Naam : ''

    const arrayVoornaam = body.find(item => item.Voornaam !== undefined)
    const Voornaam = arrayVoornaam ? arrayVoornaam.Voornaam : ''

    const arrayEmail = body.find(item => item.Email !== undefined)
    const Email = arrayEmail ? arrayEmail.Email : ''

    const arrayTelefoonnummer = body.find(item => item.Telefoonnummer !== undefined)
    const Telefoonnummer = arrayTelefoonnummer ? arrayTelefoonnummer.Telefoonnummer : ''

    const arrayselect = body.find(item => item.select !== undefined)
    const select = arrayselect ? arrayselect.select : ''

    const arraytextArea = body.find(item => item.textArea !== undefined)
    const textArea = arraytextArea ? arraytextArea.textArea : ''

    if (!email) return 'email is undefined'
    if (!formId) return 'formId is undefined'

    try {
      await strapi
        .plugin('email-designer')
        .service('email')
        .sendTemplatedEmail(
          {
            // required
            to: email,

            // optional if /config/plugins.js -> email.settings.defaultFrom is set
            // from: 'support@oddball.be',

            // optional if /config/plugins.js -> email.settings.defaultReplyTo is set
            // replyTo: 'reply@example.com',

            // optional array of files
            attachments: [],
          },
          {
            // required - Ref ID defined in the template designer (won't change on import)
            templateReferenceId: mailId,

            // If provided here will override the template's subject.
            // Can include variables like `Thank you for your order {{= USER.firstName }}!`
            // subject: `Thank you for your order`,
          },
          {
            // this object must include all variables you're using in your email template
            USER: {
              Naam: Naam,
              Voornaam: Voornaam,
              Email: Email,
              Telefoonnummer: Telefoonnummer,
              select: select,
              textArea: textArea,
              formId: formId,
            },
          }
        );

      ctx.response.status = 200;

      // return next; 
    } catch (err) {
      console.log(err)
      strapi.log.debug('📺: ', err);
      return ctx.badRequest(null, err);
    }
  }
};

