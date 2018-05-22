{extends file='page.tpl'}
{block name='page_content'}
{capture name=path}
  <a href="{$link->getPageLink('my-account', true)|escape:'html':'UTF-8'}">
    {l s='My account' mod='revws'}
  </a>
  <span class="navigation_page">
    {l s='My reviews' mod='revws'}
  </span>
{/capture}

<div id="myreviews">
  {include
    file="module:revws/views/templates/front/private_my_review_list.tpl"
    reviewsData=$reviewsData
    reviewList=$reviewList
    reviewEntities=$reviewEntities
    visitor=$visitor
  }
</div>

<nav>
  <ul class="pager">
    <li class="previous">
      <a href="{$link->getPageLink('my-account', true)|escape:'html':'UTF-8'}" title="{l s='Back to your account' mod='revws'}">&larr; {l s='Back to your account' mod='revws'}</a>
    </li>
  </ul>
</nav>
{/block}
