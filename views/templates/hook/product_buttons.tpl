{*
* Copyright (C) 2017 Petr Hucik <petr@getdatakick.com>
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@getdatakick.com so we can send you a copy immediately.
*
* @author    Petr Hucik <petr@getdatakick.com>
* @copyright 2018 Petr Hucik
* @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*}
<div id="revws-product-buttons">
  <b>{l s='Rating' mod='revws'}:</b>
  {if $reviewCount > 0}
    <a class="revws-product-buttons-link" href="#idTabRevws">
      {include file='./grading.tpl' grade=$grade shape=$shape type='product'}
      <div class="revws-count-text">
        {l s='(read %1$d reviews)' sprintf=[$reviewCount] mod='revws'}
      </div>
    </a>
    {if $microdata}
    <div class="revws-hidden" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
      Rated <span itemprop="ratingValue">{$grade|string_format:"%.2f"}</span>/5
      based on <span itemprop="reviewCount">{$reviewCount}</span> customer reviews
    </div>
    {/if}
  {else}
    {if $canCreate}
      <a class="revws-product-buttons-link" href="#" data-revws-create-trigger="{$productId}">
        {l s='Be the first to write a review!' mod='revws'}
      </a>
    {else}
      {if $isGuest && $reviewsData.preferences.showSignInButton}
        <a class="revws-product-buttons-link" href="{$loginLink}">
          {l s='Sign in to write a review' mod='revws'}
        </a>
      {else}
        {l s='No customer reviews for the moment.' mod='revws'}
      {/if}
    {/if}
  {/if}
</div>
