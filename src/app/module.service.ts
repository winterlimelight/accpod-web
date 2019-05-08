import { Injectable } from '@angular/core';
import { Module } from './types'

@Injectable()
export class ModuleService {

    getData(): Promise<Module> {
        return Promise.resolve({
            "moduleID": "0d59d611-4904-4457-1c78-08d4a007e498",
            "title": "Getting Started and Introducing Your Own Business",
            "description": "<h1>Learning Outcomes</h1><p>When you have completed this module you should:</p><ol><li>Know the financial objectives of business</li><li>Understand the accounting basis of a business</li><li>Started to explore basic business tax</li><li>Learnt something about a real business and its industry</li></ol><p><img src=\"https://apodportalstorage.blob.core.windows.net/apod-portal/Real%20Business%20Experiience.jpg\"></p>",
            "moduleActions": [{
                    "moduleActionID": "083fd76b-73a5-4baa-5ba4-08d4a00862ef",
                    "title": "Crash Course on Accounting",
                    "description": "Watch this video. It has been provided by Xero to help their UK customers understand basic accounting concepts. While not all the content will be applicable for New Zealand, accounting principles are generally synonymous worldwide. Follow the learning actions to answer learning outcome questions for the rest of the module.<p><br></p>What does ALCIE stand for?<p><br></p>",
                    "actionOrder": 1,
                    "created": "2017-05-06T17:45:03.373",
                },
                {
                    "moduleActionID": "24c3b07d-7bb4-4f75-5bad-08d4a00862ef",
                    "title": "Single General Ledger",
                    "description": "<p>Watch the video below produced by Xero for their Accounting Partners. In less than 30 words describe what is single general ledger and why a business should use a single general ledger system?</p><iframe class=\"ql-video\" frameborder=\"0\" allowfullscreen=\"true\" src=\"https://www.youtube.com/embed/R-bp-42HS00?showinfo=0\"></iframe><p><br></p>",
                    "actionOrder": 2,
                    "created": "2017-05-06T05:57:37.418",
                },
                {
                    "moduleActionID": "2cbcf2e6-a45a-4684-5baf-08d4a00862ef",
                    "title": "Business Structure",
                    "description": "<p><br></p>Click and read about the three most basic business structure options<a href=\"http://www.ird.govt.nz/tool-for-business/how-to-start/choose-structure/\" target=\"_blank\"> HERE</a>. For extension, google Limited Partnerships.<p><br></p>In no less than 50 words describe the preferred business structure for your next venture and why?<p><br></p>",
                    "actionOrder": 3,
                    "created": "2017-05-06T17:59:52.128",
                },
                {
                    "moduleActionID": "d6e99a8a-29f6-4279-5bb0-08d4a00862ef",
                    "description": "<h2><em style=\"color: inherit;\">Now it's time to get to know your own business. We'll use this background information later in the course but for now you'll start to see the importance of understanding both your business sector and industry when starting or acquiring a new business. The information should assist you to understand your unique business model.</em></h2><p><br></p><h1><strong style=\"color: inherit;\">Your Dairy Farm Company</strong></h1><p><br></p><p><img src=\"https://apodportalstorage.blob.core.windows.net/apod-portal/Cows%20on%20Farm.jpg\"></p><p><br></p><h3 class=\"ql-align-justify\">Some key facts:</h3><h3 class=\"ql-align-justify\">Your Dairy Farm Ltd commenced in December 2001 and is currently owned by several shareholdings.</h3><p class=\"ql-align-justify\"><br></p><h3 class=\"ql-align-justify\">There are two dwellings owned by the business which are all occupied by staff. <a href=\"http://www.ird.govt.nz/payroll-employers/make-deductions/staff-benefits/allowances/benefit-allowance/\" target=\"_blank\">Accommodation provided to an employee</a>&nbsp;is a benefit and therefore taxable. You add the value of the benefit to the wages each pay period and deduct PAYE from the total.&nbsp;Three full time permanent staff are employed and casual staff are used as required, generally only for calf rearing.</h3><p class=\"ql-align-justify\"><br></p><h2 class=\"ql-align-justify\">Farming General:</h2><h3 class=\"ql-align-justify\">Your Dairy Farm is a non-irrigated farm based in New Zealand. Altitude 250-300 mtrs . 2014/15 growth = 12,000 t/ha. Rainfall 1,000 -1,100 mm. Water supply from bore. Contour is flat. 10% of pasture is re-grassed annually.</h3><p class=\"ql-align-justify\"><br></p><h3 class=\"ql-align-justify\">Challenges: <a href=\"https://www.dairynz.co.nz/farm/adverse-events/drought/\" target=\"_blank\">Climate</a>, Summer Dry periods</h3><p class=\"ql-align-justify\"><br></p><h3 class=\"ql-align-justify\">Farm <a href=\"https://help.xero.com/nz/Settings_FinSettings\" target=\"_blank\">financial settings</a>&nbsp;: <a href=\"http://www.ird.govt.nz/yoursituation-bus/starting/obligations/starting-balancedate.html\" target=\"_blank\">Balance date</a>&nbsp;31 May, Payment Basis and one monthly registered for <a href=\"http://www.ird.govt.nz/gst/gst-registering/gst-about/\" target=\"_blank\">GST</a>, GST Number 119-084-040.</h3><p class=\"ql-align-justify\"><br></p><h3 class=\"ql-align-justify\">Bank Term Debt: Your farm business carries a term bank loan of $5,181,000. This debt is currently interest only.</h3><p class=\"ql-align-justify\"><br></p><h3 class=\"ql-align-justify\">In addition to your term bank debt, your farm also carries a <a href=\"https://www.kiwibank.co.nz/business-banking/loans-finance/?gclid=CK7Vja34yNMCFVgjvQodiy0Dtg&amp;gclsrc=aw.ds\" target=\"_blank\">Bank Overdraft</a>&nbsp;facility with a limit of $500,000.&nbsp;</h3><p class=\"ql-align-justify\"><br></p><h3 class=\"ql-align-justify\">The farm makes a batch payment for the majority of its supplier invoices from the previous month on or around the 20<span style=\"color: inherit;\">th</span>&nbsp;of the month following.</h3><p class=\"ql-align-justify\"><br></p><h3 class=\"ql-align-justify\">The D &amp; H McDonald loan ( he is the equity farm manager)&nbsp;is interest only with the rate applying being the current&nbsp;<a href=\"http://www.ird.govt.nz/technical-tax/legislation/2016/orders-in-council/oic-2016-fbt-rate-low-interest-loans.html\" target=\"_blank\">FBT prescribed rate</a>.&nbsp;McDonald is responsible for paying the RWT component to the IRD.</h3><p class=\"ql-align-justify\"><br></p><h3 class=\"ql-align-justify\">Long Road Dairies Limited loan is a shareholder loan&nbsp;- Your Dairy Farm holds 1,000,000 shares (10.00%) in Long Road Dairies Ltd.</h3><p class=\"ql-align-justify\"><br></p><h3 class=\"ql-align-justify\">Your farm supplies to one of the largest Dairy Cooperative companies in New Zealand. Your farm is manged by a professional agribusiness investment firm with a dedicated farm investment manager and consultant for a set monthly fee.&nbsp;</h3><p class=\"ql-align-justify\"><br></p><h3 class=\"ql-align-justify\">The key people in the business are: Farm Manager/equity partner: Dave McDonald</h3><p class=\"ql-align-justify\"><br></p><h3 class=\"ql-align-justify\">Milk Production Target: 260,000 kgMS. Per Cow: 400 kgMS. Per Ha: 1,226 kgMS</h3><h3 class=\"ql-align-justify\">Last Season: 248,000 kgMS</h3><h3 class=\"ql-align-justify\">Shed <a href=\"https://www.dairynz.co.nz/milking/rotary/\" target=\"_blank\">Rotary</a>&nbsp;: 54 bail</h3><h3 class=\"ql-align-justify\"><a href=\"https://www.dairynz.co.nz/feed/supplements/common-feed-supplements/\" target=\"_blank\">Supplements</a>: Fed Silage: 100t/DM Winter&nbsp;<a href=\"http://www.dairynz.co.nz/feed/crops/\" target=\"_blank\" style=\"color: inherit;\">Crop</a>: 120t/<a href=\"http://www.dairynz.co.nz/feed/supplements/feed-values/\" target=\"_blank\" style=\"color: inherit;\">DM</a></h3><h3 class=\"ql-align-justify\">Area Total: 217 ha, Effective Hectares: 212 ha.</h3><h3 class=\"ql-align-justify\">Max Milked: 635</h3><h3 class=\"ql-align-justify\">Herd Replacements: 160 (25%)</h3><p class=\"ql-align-justify\"><br></p><h3 class=\"ql-align-justify\">&nbsp;#moooo All the Best !</h3><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\">&nbsp;[Note: all names and labels have been changed. Use of replacement names and their similarity to any individuals or businesses is purely coincidental. No liability will be accepted. AccountingPod Ltd]</p><p><br></p>",
                    "title": "Your own Dairy Farm",
                    "actionOrder": 4,
                    "created": "2017-05-06T06:00:57.718",
                }
            ]
        });
    }

}
