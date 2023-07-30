import CommentComp from '@/components/CommentComp';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import ReadLikely from '@/components/ReadLikely';
import ShareLink from '@/components/ShareLink';
import { TypographyH1, TypographyH2 } from '@/components/Typography';
import Image from 'next/image';

export default function BlogDetails({ params }: { params: { slug: string } }) {
  return (
    <>
      <Navigation />

      <main className='container my-14'>
        <article className='max-w-[800px] my-14'>
          <div className='space-y-5'>
            <TypographyH1 className='text-left ml-0 text-2xl md:text-[48px] leading-[120%]'>
              What building an ed-tech platform is like. How we do it.
            </TypographyH1>

            <div className='flex items-center gap-2'>
              <span className='text-brandColor'>by Gigi Pepper</span>{' '}
              <span className='w-[7px] h-[6px] inline-block rounded-[100%] bg-[#1A1919]'></span>
              <span className='text-brandNight'>20, July 2023</span>
            </div>
          </div>

          <Image
            src={'/images/blog/demo-image.png'}
            alt=''
            width={1000}
            height={1000}
            className='rounded-[36px] my-6'
          />

          <div className='space-y-6'>
            <p>
              This might seem obvious, but it&apos;s one step that many
              companies overlook. Candidates may be tempted to join a team
              because they love the job, but a poor salary could put them off.
              On the other hand, they could join the team and not receive a pay
              rise for another five years. You need to stay competitive when it
              comes to keeping hold of your best salespeople, which means
              you&apos;ll need to offer a competitive compensation plan. This
              can include base salaries, commissions, bonuses, and other
              incentives through competition. Whilst too great an emphasis on
              competition can create a bad working environment, getting teams to
              compete for team rewards can be a great motivator, encourage team
              spirit, and show that you value their achievements. Provide
              Opportunities for Growth Top talent may not start off at the top.
              In fact, they may have worked their way up the career ladder to
              get to where they are. They want to know that you can offer them
              further growth within their career. Offer them access to
              additional training courses like additional certifications, 1-1
              coaching from management, or access to sales conferences and
              industry seminars. This is not only satisfying for them but
              expanding their skillset can be a huge help to your business.
            </p>
            <div>
              <TypographyH2>How we play</TypographyH2>

              <p className='mt-3'>
                Top talent may not start off at the top. In fact, they may have
                worked their way up the career ladder to get to where they are.
                They want to know that you can offer them further growth within
                their career. Offer them access to additional training courses
                like additional certifications, 1-1 coaching from management, or
                access to sales conferences and industry seminars. This is not
                only satisfying for them but expanding their skillset can be a
                huge help to your business. Create a Positive Sales Culture A
                positive work environment can go a long way in retaining top
                sales talent. Encourage collaboration and teamwork. Recognize
                and reward achievements when you see them, and promote a culture
                of openness and transparency—whether you&apos;re working at the
                office or remotely. This can be particularly important when it
                comes to sales. There can always be an element of competition
                and comparison, especially when teams are trying to push as many
                sales as possible. However, if you want team members to stick
                around you want to foster an environment where team members help
                each other so they all succeed and that an increase in overall
                sales is the clear objective. Offer Flexible Work Arrangements
                Nowadays, flexible working is pretty much a requirement for many
                employees. Many top salespeople value flexibility in their work
                arrangements; it can help them cut costs on commuting and
                sometimes even save them money with childcare. Consider offering
                flexible schedules or remote work options to help your sales
                team achieve a better work-life balance.
              </p>
            </div>
          </div>
        </article>

        <ShareLink />

        <ReadLikely />

        <CommentComp />
      </main>

      <Footer />
    </>
  );
}
